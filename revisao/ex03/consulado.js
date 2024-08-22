function verificar() {
    var n1 = document.getElementById('num1')
    var n2 = document.getElementById('multa')
    var n3 = Number(n1.value)
    n2.innerHTML = (`<p> Sua velocidade atual é de <strong> ${n3} Km/h </strong> </p>`)
    if (n3 > 60) {
        n2.innerHTML += (`<p> Você está sendo <strong> MULTADO </strong> por excesso de velocidade </p>`)
    }
    n2.innerHTML += (`<p> Dirija sempre com cinto de segurança! </p>`)
}