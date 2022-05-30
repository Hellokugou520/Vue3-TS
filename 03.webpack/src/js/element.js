import '../css/element.css'
import '../css/element.less'
const imgFile = require('../img/img.jpg')

let el = document.createElement('div')
el.className = 'box'
el.innerHTML = 'Hello World'

let img = document.createElement('img')
img.width = 300
img.src = imgFile

let imgEl = document.createElement('div')
imgEl.className = 'bg-image'

document.body.appendChild(el)
document.body.appendChild(img)
document.body.appendChild(imgEl)