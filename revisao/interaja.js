var a = document.getElementById('area')

a.addEventListener('click', clicou)
a.addEventListener('mouseenter', entrou)
a.addEventListener('mouseout', saiu)

function clicou() {
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}

function entrou() {   
    a.innerText = 'Entrou!'
    a.style.background = 'blue'
}

function saiu() {   
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}