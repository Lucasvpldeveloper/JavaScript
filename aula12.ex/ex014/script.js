function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        imagem.src = 'dia.png' 
        document.body.style.background = '#6f5c04'

    } else if (hora >= 12 && hora <= 18) {
        imagem.src = 'tarde2.png'
        document.body.style.background = '#d48a73'
    } else {
        imagem.src = 'noite.png'
        document.body.style.background = '#2b3946'
    }
        
}
