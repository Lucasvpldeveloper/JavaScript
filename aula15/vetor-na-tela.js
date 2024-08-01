let num = [9, 7, 5, 3, 2, 1]


/*
for (let n = 0; n < num.length; n++) {
    console.log(`A posição é ${n} e o valor ${num[n]}`)
}
*/


/*
let valores = [2, 7, 9, 8, 6, 5, 4, 3, 2, 1]
valores.push(1)
valores.sort()
console.log(valores)
console.log(`O vetor tem ${valores.length} posições!`)
console.log(`O último valor do vetor é ${valores[10]}`)
*/

//console.log(valores) 

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/ 

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

