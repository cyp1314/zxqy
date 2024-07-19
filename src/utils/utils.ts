import { JSEncrypt } from 'jsencrypt'
import { utils, writeFile } from 'xlsx'
import moment from 'moment'
// 引入插件
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
// 清空html标签
export function formatHtml(str: string) {
	if (!str) return str
	str = str.replace(/(<([^>]+)>)/ig, ''); // 去除HTML tag  
	str = str.replace(/[ | ]*\n/g, '\n'); // 去除行尾空白
	str = str.replace(/&nbsp;/ig, ''); // 去掉nbsp
	return str;
}
export function exportPDF(ele: HTMLElement, fileName: string) {
	html2canvas(ele as HTMLElement, {
		// dpi: 96, // 分辨率
		scale: 2, // 设置缩放
		useCORS: true, // 允许canvas画布内 可以跨域请求外部链接图片, 允许跨域请求。,
		backgroundColor: '#ffffff',
		// bgcolor: '#ffffff',
		logging: false, // 打印日志用的 可以不加默认为false
	}).then((canvas) => {
		const contentWidth = canvas.width;
		const contentHeight = canvas.height;
		// 一页pdf显示html页面生成的canvas高度;
		const pageHeight = (contentWidth / 592.28) * 841.89;
		// 未生成pdf的html页面高度
		let leftHeight = contentHeight;
		// 页面偏移
		let position = 0;
		// a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
		const imgWidth = 595.28;
		const imgHeight = (595.28 / contentWidth) * contentHeight;
		// const ctx: any = canvas.getContext('2d');
		// 添加水印
		// ctx.textAlign = 'center';
		// ctx.textBaseline = 'middle';
		// ctx.rotate((25 * Math.PI) / 180);
		// ctx.font = '20px Microsoft Yahei';
		// ctx.fillStyle = 'rgba(184, 184, 184, 0.8)';
		// for (let i = contentWidth * -1; i < contentWidth; i += 240) {
		//   for (let j = contentHeight * -1; j < contentHeight; j += 100) {
		//     // 填充文字，x 间距, y 间距
		//     ctx.fillText('水印名', i, j);
		//   }
		// }
		const pageData = canvas.toDataURL('image/jpeg', 1.0);
		const pdf = new jsPDF(undefined, 'pt', 'a4');
		if (leftHeight < pageHeight) {
			// 在pdf.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置在pdf中显示；
			pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
		} else {
			// 分页
			while (leftHeight > 0) {
				pdf.addImage(
					pageData,
					'JPEG',
					0,
					position,
					imgWidth,
					imgHeight
				);
				leftHeight -= pageHeight;
				position -= 841.89;
				// 避免添加空白页
				if (leftHeight > 0) {
					pdf.addPage();
				}
			}
		}
		// 可动态生成
		pdf.save(`${fileName}.pdf`);
	});
}

// rsa公钥加密
export function getEncrypt(val: string) {
	const encrypt = new JSEncrypt()
	encrypt.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCPr06t2imH3wd8ZmjemU2TBH7iqbYtCgI6WIm0A5anMItIsnEL2XZo-U8GbfCiHLx5IGPDyO9jfvbXRT3WRuDWG6l8VAXECuhEw-4HtEVsyPObhq--QUih_A1fEDbIbnFWE1-c_FwBde8eljwLNWxkZjGM1MElm8ZAPxXF8y8njwIDAQAB')
	return encrypt.encrypt(val)
}

// 导出excel
export function exportData(h: any[], b: any[], name?: string, n: string = moment().format('YYYY-MM-DD_HH:mm:ss')) {
	const data: any[] = []
	b.forEach(row => {
		const obj = {} as any
		h.forEach(item => {
			let val = row[item.prop] || ''
			if (item.formatter) {
				val = item.formatter(row, item)
			}
			obj[item.label] = val
		})
		data.push(obj)
	})
	const wb = utils.book_new()
	const ws = utils.json_to_sheet(data)
	utils.book_append_sheet(wb, ws)
	const title = name || n
	writeFile(wb, `${title}.xlsx`, {
		bookType: 'xlsx'
	})
}

/**
 * * 生成一个不重复的ID
 * @param { Number } randomLength
 */
export const getUUID = (randomLength = 10) => {
	return Number(Math.random().toString().substring(2, randomLength) + Date.now()).toString(36)
}

// 深拷贝
const isArr = (origin: any): boolean => {
	const str = '[object Array]'
	return Object.prototype.toString.call(origin) === str
}
export function deepClone<T>(origin: T, target?: Record<string, any> | T): T {
	const tar = target || {}
	for (const key in origin) {
		if (Object.prototype.hasOwnProperty.call(origin, key)) {
			if (typeof origin[key] === 'object' && origin[key] !== null) {
				tar[key] = isArr(origin[key]) ? [] : {}
				deepClone(origin[key], tar[key])
			} else {
				tar[key] = origin[key]
			}
		}
	}
	return tar as T
}
