// 1° passo: criar 2 variaveis: n (valor iformado pelo usuário), calc = 1 (multiplicador fatorial)
// 2° passo: criar laço for: (i (contador) recebe n; enquanto i for maior ou igual a 0; i recebe i - 1)
/*
calc recebe calc * i
escrever o calculo sendo realizado ("n * i")
*/
// 3° passo: escrever a respota final

let leia = require("readline-sync")
console.log("Digite o valor: ")
n = leia.questionInt()
calc = 1
for(i = n; i >= 1; i--){
    calc = calc * i
    console.log(n+" x "+i)
}
console.log("A resposta é: "+cal2)