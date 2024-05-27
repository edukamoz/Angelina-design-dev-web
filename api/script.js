let CEP = document.querySelector("input[name='CEP']")
let botao = document.getElementById("buscar")
let img = document.querySelector("img")

botao.addEventListener('click', async function buscarCep(){
    let api = `https://viacep.com.br/ws/${CEP.value}/json`
    let dados = await fetch(api)
    let dadosFormat = await dados.json()
    let cidade = dadosFormat.localidade
    apiBDImagemUnsplash = `https://source.unsplash.com/1600x900/?${cidade}`
    img.setAttribute('src', apiBDImagemUnsplash)
    img.setAttribute('style', 'width: 800px')
})
