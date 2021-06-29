
// 1° passo: dividir o total por 100 e calcular o resto da mesma (o resto será um falor variavel que ficará em diversas variaveis)
// 2° passo: dividir o resto por 50 e calcular o resto da mesma
// 3° passo: dividir o resto por 25 e calcular o resto mesma
// 4° passo: dividir o resto por 10 e calcular o resto da mesma
// 5° passo: dividir o resto por 5 e calcular o resto da mesma
// 6° passo: o resto da divisão acima será o tanto de moedas de 1 reais


let tot = 1674.50
let cem = parseInt(tot / 100)
let r1 = tot % 100
let n50 = parseInt(r1/50)
let r2 = (r1 % 50)
let n25 = parseInt(r2/25)
let r3 = r2 % 25
let n10 = parseInt(r3 / 10)
let r4 = r3 % 10
let n5 = parseInt(r4 / 5)
let n1 = parseInt(r4 % 5)


console.log(`${tot} reais, resultará em ${cem} notas de 100, ${n50} notas 50, ${n25} notas de 25, ${n10} notas de 10, ${n5} notas de 5 e ${n1} moedas de 1 real`)