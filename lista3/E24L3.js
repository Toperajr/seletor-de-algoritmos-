// 1° passo: criar (ler) 2 variaveis: r (razão), ini (valor inicial)
// 2° passo: criar laço for: (i (contador) recebe 1; enquanto i for menor ou igual a 10; i recebe i + 1)
/*
cal recebe ini + r
ini recebe cal
escrever cal
*/

leia = require("readline-sync")
console.log("Digite a razão: ")
r = leia.questionInt()
console.log("Digite o valor inicial: ")
ini = leia.questionInt()
for (i = 1; i <= 10; i++){
    cal = ini + r
    ini = cal
    console.log(cal)
}