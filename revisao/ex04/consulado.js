function verificar() {
    var pais = document.getElementById('pais')
    var nasceu = document.getElementById('nasceu')
    var txt1 = pais.value
    nasceu.innerHTML = (`<p> Nascido em ${txt1} </p>`)
    if (txt1 != 'Brasil') {
        nasceu.innerHTML += ('<p> Você é estrangeiro! </p>')
    } else {
        nasceu.innerHTML += ('<p> Você é Brasileiro! </p>')
    }

} 