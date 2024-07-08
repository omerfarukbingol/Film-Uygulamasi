const input = document.getElementsByTagName('input')[0]
let filmArray = new Array;
let filmIsmi = ''
input.addEventListener('keydown', (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        filmArray.push(e.key.toLocaleLowerCase())
    }
    else if (e.keyCode == 8)
        filmArray.pop()
})

const button = document.getElementById('button');
button.addEventListener('click', () => {
    filmArray.map(letter => {
        filmIsmi += letter
    })
    if (filmIsmi === null || filmIsmi == '') {
        showAlert()
        return
    }
    findID()
    filmArray.length = 0
    filmIsmi = ''
})

function findID() {
    let arananId = document.getElementById(filmIsmi)
    const container = document.getElementById('container')
    let items = document.querySelectorAll('.item')
    Array.from(items).map(item => {
        item.style.display = 'none'
        if (arananId) {
            arananId.style.marginTop = '0'
            arananId.style.display = 'flex'
        }
    })
}

function showAlert() {
    alert('Lutfen bir isim giriniz')
    let items = document.querySelectorAll('.item')
    Array.from(items).map(item => {
        item.style.display = 'flex'
    })
    return
}


