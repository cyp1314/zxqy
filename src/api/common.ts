import Request from '@/utils/request'

export function getAddress(id: number = 0) {
	return Request({
		url: 'common/api/query/area/' + id,
		method: 'GET'
	})
}
export function getSljg() {
	return Request({
		url: 'security/api/security/query/area/organ',
		method: 'GET'
	})
}

// 事项变更
export function saveXkzSx(data: any) {
	return Request({
		url: 'security/api/security/information/change',
		method: 'POST',
		data
	})
}
// 办事指南
export function getInstruction(id: number) {
	return Request({
		url: `common/api/user/${id}`,
		method: 'GET'
	})
}
// 保安服务法人变更
export function saveFrbg(data: any) {
	return Request({
		url: 'security/api/security/legal/person/change',
		method: 'POST',
		data
	})
}
// 办理记录
export function ba_list(jbrsfzh: string) {
	return Request({
		url: 'security/api/security/record?jbrsfzh=' + jbrsfzh + "&size=999999",
		method: 'GET'
	})
}

// 保安服务公司跨省、自治区、直辖市提供保安服务备案
export function interprovincial(data: any) {
	return Request({
		url: 'security/api/security/company/interprovincial',
		method: 'POST',
		data
	})
}

// 《保安服务许可证》设立
export function apply(data: any) {
	return Request({
		url: 'security/api/security/service/apply',
		method: 'POST',
		data
	})
}

export function getUserInfo() {
	return Request({
		url: '/identification/api/account/three/users',
		method: 'GET'
	})
}

export function getService(value: string) {
	return Request({
		url: '/pay/api/wxPath/md5/scene?value=' + value,
		method: 'GET'
	})
}
export function createQr(page: string, scene: string, width: number) {
	return Request({
		url: '/pay/api/wxPath/qr/code',
		method: 'POST',
		data: {
			page: page,
			scene: scene,
			width: width
		}
	})
}
