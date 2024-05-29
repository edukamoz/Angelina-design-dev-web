// let bandeira = 
// let imagem = `https://source.unsplash.com/1600x900/?${cidade}`
let buscar = document.getElementById('buscar')

buscar.addEventListener('click', verificarLogradouro)

async function verificarLogradouro() {
    let cep = document.getElementById('cep').value
    cep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    cep = await cep.json()
    document.getElementById('logradouro').value = `${cep.logradouro}, ${cep.bairro} - ${cep.localidade} - ${cep.uf}`

    // Colocar imagem

    // unsplash = `https://source.unsplash.com/1600x900/?${cep.localidade}`
    // let img = document.querySelector("img[alt='cidade']")
    // img.setAttribute('src', unsplash)
    // img.setAttribute('hidden', 'False')

    // Colocar bandeira

    bandeira = `https://flagsapi.com/BR/flat/64.png`
    let icon_bandeira = document.querySelector("img[alt='bandeira']")
    icon_bandeira.setAttribute('src', bandeira)
    icon_bandeira.hidden = false
}

async function verificarClima() {
    let cidade = document.getElementById('cidade').value
    let clima = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=2a6c0ab19770774ca532fdf9848e9a89&units=metric`)
    clima = await clima.json()
    document.getElementById('temperatura').innerHTML = `${clima.main.temp}ºC`
    document.getElementById('humidade').innerHTML = `${clima.main.humidity}%`
    document.getElementById('vento').innerHTML = `${clima.wind.speed}km/h`
    document.getElementById('tempo').innerHTML = `${clima.weather[0].main}`

    // Colocar bandeira

    bandeira = `https://flagsapi.com/${clima.sys.country}/flat/64.png`

}

function limparDados() {
    let elementos = document.getElementsByTagName('input')
    let elementos2 = document.getElementsByTagName('span')

    for (let x in elementos) {
        elementos[x].value = ''
    }

    for (let x in elementos2) {
        elementos2[x].innerHTML = ''
    }
}