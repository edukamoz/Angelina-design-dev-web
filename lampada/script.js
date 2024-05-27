const lampada = document.getElementById('lampada')
let ligado = false

function ligar() {
    // lampada.hidden = false;
    lampada.setAttribute("src", "img/luzLigada.gif")
}

function desligar() {
    // lampada.hidden = false;
    lampada.setAttribute("src", "img/luzDesligada.gif")
}

function aparecer() {
    lampada.hidden = false;
}

function sumir() {
    lampada.hidden = true;
}

function alternar() {
    estadoLmpd = lampada.getAttribute("src")
    if (estadoLmpd == "img/luzDesligada.gif") {
        ligar()
    } else {
        desligar()
    }
}

function piscar() {
    if (ligado == false) {
        a = setInterval(alternar, 200)
    } else {
        clearInterval(a)
    }

    ligado = !ligado
    
}