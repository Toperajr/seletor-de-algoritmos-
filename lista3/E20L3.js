// 1° passo: criar 5 variaveis: n = 1 (números a serem lidos), a1 = 0 (números entre 0 a 25),
// a2 = 0 (números entre 26 a 50), a3 = 0 (números entre 51 a 75), a4 = 0 (números entre 76 a 10)
// 2° passo: criar laço for: (i (contador) recebe 0; enquanto n for maior ou igual a 0; i recebe i + 1)
/*
ler n
criar condicional: se ( n for maior ou igual a 0 e n for menor ou igual a 25) a1 recebe a1 + 1
criar condicional: se ( n for maior ou igual a 26 e n for menor ou igual a 50) a2 recebe a2 + 1
criar condicional: se ( n for maior ou igual a 51 e n for menor ou igual a 75) a3 recebe a3 + 1
criar condicional: se ( n for maior ou igual a 76 e n for menor ou igual a 100) a4 recebe a4 + 1
*/
// 3° passo: escrever os valores de a1, a2, a3 e a4

let leia = require("readline-sync")
n = 1
a1 = 0
a2 = 0
a3 = 0
a4 = 0
for (i = 0; n >= 0; i++){
    console.log("Digite um número")
    n = leia.questionInt()
    if ( n >= 0 && n <= 25){
        a1++
    }
    if ( n >= 26 && n <= 50){
        a2++
    }
    if ( n >= 51 && n <= 75){
        a3++
    }
    if ( n >= 76 && n <= 100){
        a4++
    }
    
}
console.log(`Há ${a1} números entre 0 e 25, ${a2} entre 26 e 50, ${a3} entre 51 e 75 e ${a4} entre 76 e 100`)