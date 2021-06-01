let canvas, font, texto, backgroundColor;

var radios = document.querySelectorAll('input[type=radio][name="color"]');
radios.forEach(radio => radio.addEventListener('change', () => backgroundColor = radio.value))

let config = {
    width: 615,
    height: 232,
    fontSize: 42
}

function preload() {
    font = loadFont('/assets/fonts/AlegreyaSans-Bold.ttf')
}

function setup() {
    canvas = createCanvas(config.width, config.height)
    canvas.parent('canvas')
}

function draw() {
    texto = document.getElementById('texto').value
    backgroundColor = document.querySelector('input[type=radio][name="color"]:checked').value

    clear()
    background(backgroundColor)

    textFont(font)
    textSize(config.fontSize)
    fill(255)
    textLeading(34)
    translate(width / 2, height / 2)
    textAlign(CENTER, CENTER)
    text(texto, 0, 0)
}

function saveFile() {
    let nombre = document.getElementById('texto').value.replace(' ', '-').toLowerCase()
    save(canvas, nombre + '.jpg');
}