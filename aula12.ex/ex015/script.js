function verificar() {
    var data = new Date()
    var ano = data.getFullYear
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.ariaValueMax.length == 0 || fano > ano) {
        window.alert('[ERRO] Verifique os dados novamente!')
    }
        
        
}