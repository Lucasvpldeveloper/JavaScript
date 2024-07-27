var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 8 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora <= 18) {
    console.log('Bora tarde!')
} else if (hora >= 19 && hora <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}