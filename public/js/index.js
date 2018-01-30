
window.onload = function() {

}
function devolverImporte () {
    var importe = document.getElementById('importe').value
    console.log(importe)
}

function calcularCouta(total, interes) {
    return Number(total * ((interes/100) +1) / 12).toFixed(2)
}

function totalConInteres (total, interes) {
    return Number((total * ((interes/100) + 1))).toFixed(2)
}

function calcularTodo() {
    var importe = document.getElementById('importe').value
    var interes = document.getElementById('taza').value
    if(importe && interes) {
        var cuota = calcularCouta(importe, interes)
        var total = totalConInteres(importe, interes)
        var coutaElemento = document.getElementById('cuota')
        coutaElemento.value = cuota
        var totalElemento = document.getElementById('total')
        totalElemento.value = total
    } else {
        alert('falta ingresar algun valor')
    }
}

function limpiar() {
    document.getElementById('importe').value = null
    document.getElementById('taza').value = null
    document.getElementById('cuota').value = null
    document.getElementById('total').value = null
}