function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anonascimento = document.getElementById('anonasc') 
    var res = document.getElementById('res')
    if (anonascimento.value.length == 0 || anonascimento.value > ano) {
        alert('[ERRO] Por favor repita os dados informados!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(anonascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src','menino.png')
            } else if (idade < 21) {
                // Adolecente
                img.setAttribute('src','homem-jovem.png')
            } else if (idade < 50) {
                // Idoso
                img.setAttribute('src','homem-adulto.png')
            } else {
                img.setAttribute('src','homem-velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src','menina.png')
            } else if (idade < 21) {
                // Adolecente
                img.setAttribute('src','mulher-jovem10.png')
            } else if (idade < 50) {
                // Idoso
                img.setAttribute('src','mulher-adulta.png')
            } else {
                img.setAttribute('src','mulher-velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}