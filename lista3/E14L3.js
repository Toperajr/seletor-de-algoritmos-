/*
para criar este programa será necessário:
* criar variavel para o número (num)
* para informar os valores pares iniciais:
criar laço for: (i (contador) recebe 0; enquanto i for menor que num; i recebe i + 1)
se (i % 2 for 0): mostrar i
fim do laço
* para informar os valores impares iniciais:
criar laço for: (a (contador) recebe 0; enquanto a for menor que num; a recebe a + 1)
se (a % 2 for diferente de 0): mostrar a
fim do laço
*/

let leia = require("readline-sync")
console.log("Insira o número")
num = leia.questionInt()
console.log("Os valores pares são :")
for (i = 0; i < num; i++){
    if (i % 2 == 0){
        console.log(i)
    }
   
}
console.log("Os valores impares são: ")
for (a = 0; a < num; a++){ 
    if (a % 2 != 0){
        console.log(a)
    }
}