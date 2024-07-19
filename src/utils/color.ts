function calcColorChannels (c: string) {
  let rawColor = c.trim().replace('#', '')
  if (/^[0-9a-fA-F]{3}$/.test(rawColor)) {
    rawColor = rawColor[0].repeat(2) + rawColor[1].repeat(2) + rawColor[2].repeat(2)
  }
  if (/^[0-9a-fA-F]{6}$/.test(rawColor)) {
    return {
      red: parseInt(rawColor.slice(0, 2), 16),
      green: parseInt(rawColor.slice(2, 4), 16),
      blue: parseInt(rawColor.slice(4, 6), 16)
    }
  }
  return {
    red: 255,
    green: 255,
    blue: 255
  }
}
// rgb转hex
const rgbToHex = (r: number, g: number, b: number) => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`

// 色阶转换
function mixColor (color: string, percent: number = 0.2) {
  let { red, green, blue } = calcColorChannels(color)
  if (percent > 0) {
    red *= 1 - percent
    green *= 1 - percent
    blue *= 1 - percent
  } else {
    const value = Math.abs(percent)
    red += (255 - red) * Math.abs(percent)
    green += (255 - green) * value
    blue += (255 - blue) * value
  }
  const hex = rgbToHex(Math.round(red), Math.round(green), Math.round(blue))
  return hex
}

// 浅色阶
function lighten (color: string, percent: number = 0.2) {
  return mixColor(color, -percent)
}
// 深色阶
function darken (color: string, percent: number = 0.2) {
  return mixColor(color, percent)
}

export default {
  calcColorChannels,
  mixColor,
  lighten,
  darken
}
