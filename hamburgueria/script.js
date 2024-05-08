let adicionais, entrega = 0

function totalPagar() {

    calcularAdicionais()
    calcularEntrega()

    let total = 0
    let lanche = Number(document.querySelector("option:checked").value)
    total = adicionais + entrega + lanche
    nome_do_cliente = document.getElementById('nome_do_cliente').value

    document.getElementById('total_pagar').value = `R$ ${total},00`
    document.getElementById('descricao_pedido').innerHTML = `
    Cliente: ${nome_do_cliente}
    Adicionais: R$ ${adicionais},00
    Entrega: R$ ${entrega},00`

}

function calcularAdicionais() {

    adicionais = 0
    let selecionados = document.querySelectorAll("input[name='adicionais']:checked")
    for (i = 0; i < selecionados.length; i++) {
        adicionais += Number(selecionados[i].value)
    }

}

function calcularEntrega() {

    entrega = document.querySelectorAll("input[name='entrega']:checked")
    entrega = Number(entrega[0].value)

}

function imprimir() {
    print()
}

function relogio() {
    
}

setInterval(relogio, 1000)
