function verificar() {
    var fano = window.document.getElementById('txt1') 
    var res = window.document.getElementById('res') 
    var data = new Date()
    var ano = data.getFullYear()
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('txt2')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('ida','foto')
       if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 12) {
            // Criança 
            img.setAttribute('src','menino.png')
        } else if (idade < 21) {
            // Adolecente
            img.setAttribute('src','homem-jovem.png')
        } else if (idade < 50) {
            // Adulto 
            img.setAttribute('src','homem-adulto.png')
        } else {
            // Idoso
            img.setAttribute('src','homem-velho.png')
        }
       } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 12) {
            // Criança 
            img.setAttribute('src','menina.png')
        } else if (idade < 21) {
            // Adolecente
            img.setAttribute('src','mulher-jovem10.png')
        } else if (idade < 50) {
            // Adulto 
            img.setAttribute('src','mulher-adulta.png')
        } else {
            // Idoso
            img.setAttribute('src','mulher-velha.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    } 
}