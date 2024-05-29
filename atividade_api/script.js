let buscar = document.getElementById('buscar')

buscar.addEventListener('click', verificarLogradouro)

async function verificarLogradouro() {

    // Aparecer Logradouro

    let cep = document.getElementById('cep').value
    localizacao = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    localizacao = await localizacao.json()

    // Verificar se CEP é válido
    if (localizacao.erro == true) {
        alert('Digite um CEP Válido')
        return
    }

    document.getElementById('logradouro').value = `${localizacao.logradouro}, ${localizacao.bairro} - ${localizacao.localidade} - ${localizacao.uf}`
    document.getElementById('cidade').value = localizacao.localidade

    // Colocar imagem (Não está funcionando o API do Unsplash)

    // unsplash = `https://source.unsplash.com/800x600/?${cep.localidade}`
    // let img = document.querySelector("img[alt='cidade']")
    // img.setAttribute('src', unsplash)
    // img.hidden = false

    // Colocar bandeira

    bandeira = `https://flagsapi.com/BR/flat/64.png`
    let icon_bandeira = document.querySelector("img[alt='bandeira']")
    icon_bandeira.setAttribute('src', bandeira)
    icon_bandeira.hidden = false

    document.getElementById('demo_cidade').innerHTML = localizacao.localidade
}

async function verificarClima() {
    let cidade = document.getElementById('cidade').value
    let clima = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=2a6c0ab19770774ca532fdf9848e9a89&units=metric`)
    clima = await clima.json()
    document.getElementById('temperatura').innerHTML = `${clima.main.temp}ºC`
    document.getElementById('humidade').innerHTML = `${clima.main.humidity}%`
    document.getElementById('vento').innerHTML = `${clima.wind.speed}km/h`
    document.getElementById('tempo').innerHTML = clima.weather[0].main

    // Colocar bandeira

    bandeira = `https://flagsapi.com/${clima.sys.country}/flat/64.png`
    let icon_bandeira = document.querySelector("img[alt='bandeira']")
    icon_bandeira.setAttribute('src', bandeira)
    icon_bandeira.hidden = false
    document.getElementById('demo_cidade').innerHTML = cidade

}

function limparDados() {
    let elementos = document.getElementsByTagName('input')
    let elementos2 = document.getElementsByTagName('span')
    document.querySelector("img[alt='bandeira']").hidden = true

    for (let x in elementos) {
        elementos[x].value = ''
    }

    for (let x in elementos2) {
        elementos2[x].innerHTML = ''
    }
}