function adicionarCaracter(caracter) {

    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay + caracter
}
function LimpaTela() {
    document.querySelector(".display").value = ""
}

function Calcular() {
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valorDisplay)
}
function Inverternumero(){
    const valorDisplay = document.querySelector(".display").value
    document.querySelector(".display").value = valorDisplay * -1 
}

