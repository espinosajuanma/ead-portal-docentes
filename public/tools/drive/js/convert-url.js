function generar() {
    let URL = document.getElementById('urlDrive').value
    if (URL == '') {
        return alert('Debe ingresar el vínculo del video de Drive')
    }
    let newURL = getURL(URL)
    document.getElementById('codigo').value = getCodigo(newURL)
    document.getElementById('vista-previa').innerHTML = getCodigo(newURL)
}

function getURL(str) {
    let last = str.substring(str.lastIndexOf('/') + 1)
    return str.replace(last, 'preview')
}

function getCodigo(url) {
    return `<iframe width="560" height="315" src="${url}" frameborder="0"></iframe>`
}

function copiar() {
    var copyText = document.getElementById('codigo');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

