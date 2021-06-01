let canvas, font, texto, backgroundColor;
let iconsImg = [];

var radios = document.querySelectorAll('input[type=radio][name="color"]');
radios.forEach(radio => radio.addEventListener('change', () => backgroundColor = radio.value))

let config = {
    width: 334,
    height: 84,
    fontSize: 32
}

function preload() {
    /*icons.forEach(e => {
        iconsImg[e.name] = loadImage(`/assets/img/icons/${e.name}.svg`)
        document.getElementById('icono').innerHTML += `<option value="${e.name}">${e.name}</option>`

    })*/
    icons.forEach(e => {
        iconsImg[e.name] = loadImage('https://gist.githubusercontent.com/' + e.url)
        document.getElementById('icono').innerHTML += `<option value="${e.name}">${e.name}</option>`

    })
    font = loadFont('/assets/fonts/AlegreyaSans-Bold.ttf')
}

function setup() {
    canvas = createCanvas(config.width, config.height)
    canvas.parent('canvas')
}

function draw() {
    texto = document.getElementById('texto').value
    backgroundColor = document.querySelector('input[type=radio][name="color"]:checked').value
    icon = document.getElementById('icono').value || '101-cursor'

    clear()
    image(iconsImg[icon], 24, 24, 32, 32)
    tint(backgroundColor)

    textFont(font)
    textSize(config.fontSize)
    fill(51)
    textAlign(LEFT, CENTER)
    text(texto, 90, height / 2 - 4)
}

function saveFile() {
    let nombre = document.getElementById('texto').value.replace(' ', '-').toLowerCase()
    save(canvas, nombre + '.png');
}