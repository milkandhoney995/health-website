// https://qiita.com/itouuuuuuuuu/items/bcad408842c7723e7ca3
// 参考：https://qiita.com/itouuuuuuuuu/items/bcad408842c7723e7ca3
// switch:https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/switch
// RGBをHSLに変換する方法:https://lab.syncer.jp/Web/JavaScript/Snippet/68/

// RGBからHSLに変換する関数
const changeRgbToHsl = function (rgb) {
  const r = rgb[0] / 255
  const g = rgb[1] / 255
  const b = rgb[2] / 255

  const min = Math.min(r, g, b)
  const max = Math.max(r, g, b)
  const diff = max - min
  let h = 0
  const l = (max + min) / 2
  const s = diff / (1 - Math.abs(max + min - 1))
  switch (min) {
    case max:
      h = 0
      break

    case r:
      h = 60 * ((b - g) / diff) + 180
      break

    case g:
      h = 60 * ((r - b) / diff) + 300
      break

    case b:
      h = 60 * ((g - r) / diff) + 60
      break
  }

  return [h, s, l]
}
// https://digipress.info/tech/change-background-color-by-scrolling/
// const changeBackgroundColor = function (element) {
//   const section = document.querySelector('.section')
//   let bgColor = getComputedStyle(section).backgroundColor
//   bgColor = bgColor.replace(/rgb|\(|\)/g, '')

//   const hsl = this.$changeRgbToHsl(bgColor)
//   if (window.scrollY > 100) {
//     element.setAttribute('style', '.cubic-bezier__all')
//     console.log(hsl)
//   }
// }

const changeBackgroundColor = function () {
  const scroll = window.pageYOffset
  console.log(scroll)

  if (scroll > 1500) {
    document.body.style.backgroundColor = '#fcfbed'
  } else if (scroll > 1000) {
    document.body.style.backgroundColor = '#f0edfc'
  } else if (scroll > 800) {
    document.body.style.backgroundColor = '#bae3cf'
  } else if (scroll > 500) {
    document.body.style.backgroundColor = '#fae8ca'
  } else if (scroll > 300) {
    document.body.style.backgroundColor = '#d6efff'
  } else {
    document.body.style.backgroundColor = '#facadd'
  }
}
// eslint-disable-next-line no-empty-pattern
export default ({}, inject) => {
  inject('changeRgbToHsl', changeRgbToHsl)
  inject('changeBackgroundColor', changeBackgroundColor)
}
