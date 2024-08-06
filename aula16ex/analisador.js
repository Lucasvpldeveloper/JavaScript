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
        

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    
}