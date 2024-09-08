function verificar() {
    var ano = new Date()
    var anoatual = ano.getFullYear()
    var anonascimento = document.getElementById('anonasc')
    var res = document.getElementById('res')
    if (anonascimento.value.length == 0 || anonascimento.value > anoatual) {
        alert('[ERRO] Repita o ano informado novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = anoatual - Number(anonascimento.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','menino.png')
            } else if (idade < 20) {
                //Adolecente
                img.setAttribute('src','homem-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src','homem-velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','menina.png')
            } else if (idade < 20) {
                //Adolecente
                img.setAttribute('src','mulher-jovem10.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src','mulher-velha.png')
            }
        }
    }
    
    res.innerHTML = `Você é ${genero} e a sua idade atual é ${idade}`
    res.style.textAlign = 'center'
    res.appendChild(img)
}