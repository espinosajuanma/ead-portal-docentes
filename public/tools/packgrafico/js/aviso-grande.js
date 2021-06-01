let canvas, font, texto, backgroundColor;
let iconsImg = [];

var radios = document.querySelectorAll('input[type=radio][name="color"]');
radios.forEach(radio => radio.addEventListener('change', () => backgroundColor = radio.value))

let config = {
    width: 440,
    height: 325,
    fontSize: 44
}

function preload() {
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
    background(backgroundColor)

    imageMode(CENTER)
    image(iconsImg[icon], width / 2, height / 2 - 40)

    textFont(font)
    textSize(config.fontSize)
    fill(255)
    textAlign(CENTER, CENTER)
    textLeading(45)
    text(texto, 0, 90, width, height)
}

function saveFile() {
    let nombre = document.getElementById('texto').value.replace(' ', '-').toLowerCase()
    save(canvas, nombre + '.jpg');
}