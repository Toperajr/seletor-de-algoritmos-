// 1° passo: criar (ler) variavel: n (número informado pelo usuário)
// 2° passo: criar laço for: (i (contador) recebe 0; equanto i for menor ou igual a 10, i recebe i + 1)
/*
criar condicional: se (n for maior ou iguak a 1 e n for menor ou igual a 10) 
    criar variavel calc (calculo): n * i
    escrever o calculo informando os números a serem calculados também
fim do laço
*/

let leia = require("readline-sync")
console.log("Digite um número: ")
n = leia.question()
for (i = 0; i <= 10; i++){
    
    if (n >= 1 && n <= 10){
        calc = n * i
        console.log(n+" x "+i+" = "+calc)
    }
}