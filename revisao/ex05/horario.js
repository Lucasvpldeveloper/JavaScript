function carregar() {
    var area = document.getElementById('area')
    var imagem = document.getElementById('img1')
    var horario = new Date()
    var horarioatual = horario.getHours()
    area.innerHTML = `Agora são ${horarioatual} horas.`
    if (horarioatual >= 5 && horarioatual < 12) {
        document.body.style.background = '#BEAF84'
        imagem.src = 'noite.png'
    } else if (horarioatual >= 12 && horarioatual < 18) {
        document.body.style.background = 'lightblue'
        imagem.src = 'tarde2.png'
    } else if (horarioatual >= 18 && horarioatual < 24) {
        document.body.style.background = 'black'
        imagem.src = 'noite.png'
    }
}