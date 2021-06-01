let canvas, font, texto, backgroundColor;
let iconsImg = [];

var radios = document.querySelectorAll('input[type=radio][name="color"]');
radios.forEach(radio => radio.addEventListener('change', () => backgroundColor = radio.value))

let config = {
    width: 440,
    height: 72,
    fontSize: 32
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
    background(230)

    fill(backgroundColor)
    noStroke()
    rect(0, 0, config.height)

    image(iconsImg[icon], 12, 12, 48, 48)

    textFont(font)
    textSize(config.fontSize)
    fill(51)
    textAlign(LEFT, CENTER)
    text(texto, 90, height / 2 - 4)
}

function saveFile() {
    let nombre = document.getElementById('texto').value.replace(' ', '-').toLowerCase()
    save(canvas, nombre + '.jpg');
}