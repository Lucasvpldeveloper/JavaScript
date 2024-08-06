let num = document.getElementById('txt1') // Dados do txt1
let lista = document.getElementById('flista') // Dados da flista
let res = document.getElementById('res') // Dados do res 
let valores = [] // Analise de dados a partir de um vetor 

function IsNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false 
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false 
    }
}

function adicionar() { 
    // O valor que foi adicionado em (fnum) vai ser analisado pra ver se ele é um número 

    if(/* Nome que eu quiser*/ IsNumero(num.value) && !inList(num.value, valores)) {
        //Só vai adicionar se for verdade os dois
        valores.push(Number(num.value)) // Adicionar um elemento no vetor
        let item = document.createElement('option') // cria uma tag option
        item.text = (`Valor ${num.value} adicionado`)
        lista.appendChild(item) // Adionando o item
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // Automatiza para quando adicionar um número ele se apagar sozinho, permitindo escrever outro número
    num.focus()
}

function finalizar() {
    // Caso não digite nenhum número vai exibir este erro 
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!') 
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0 
        let media = 0 
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>` 
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}. </p> `
    }
}
        