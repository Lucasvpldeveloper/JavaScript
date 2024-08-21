function somar() {
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    var resultado = document.getElementById('resultado')
    var res1 = Number(num1.value)
    var res2 = Number(num2.value)
    var res3 = res1 + res2 
    resultado.innerText = (`Somando ${res1} + ${res2} o resultado é ${res3}`)

}