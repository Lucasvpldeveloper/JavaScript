function mudar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 5
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        // Bom dia 
        img.src = 'dia.png'
        document.body.style.background = 'lightblue'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = 'lightsalmon'
    } else {
        // Boa noite
        img.src = 'noite.png'
        document.body.style.background = 'black'
    }
}