function contador() {
    var ini = document.getElementById("ini")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Por favor repita a operação')
    } else {
        res.innerHTML = 'Contando...'
    }
}