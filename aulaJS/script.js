function multiplicar_por_2() {
    n1 = Number(document.getElementById('num1').value)
    n2 = Number(document.getElementById('num2').value)
    x = n1 * n2
    document.getElementById('titulo').innerText = x
}

function dividir_por_2() {
    n1 = Number(document.getElementById('num1').value)
    n2 = Number(document.getElementById('num2').value)
    x = n1 / n2
    document.getElementById('titulo').innerText = x
}

function somar () {
    n1 = Number(document.getElementById('num1').value)
    n2 = Number(document.getElementById('num2').value)
    x = n1 + n2
    document.getElementById('titulo').innerText = x
}