function contagem() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
       // window.alert('[ERRO] Preencha os dados novamente!')
        res.innerHTML = ('[ERRO] preencha os dados novamente!')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (c = i; c <= f; c += p) {
            res.innerHTML += (`${c} \u{1f603}`)
        }
    }res.innerHTML += `\u{1f3c1}`

}