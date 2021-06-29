/*
para esse programa será necessário:
* criar 4 variaveis (medd = 0 (media menor), medm = 0 (média maior, meda = 0 (total de médias), med = 1 (médias lida))
* criar laço for: (i (contador) recebe 0) e continua enquanto med for maior que 0
ler med
criar condicional: se (i == 0 e med > 0),  medd e medm recebem med
criar condicional: se (med > medm e med > 0),  medm recebe med
criar condicional: se (med < medd e med > 0),  medd recebe med
criar condicional: se (med > 0),  meda recebe meda + med
i recebe i + 1
fim do laço for
* criar variavel media total: meda / (i-1)
* informar a menor média, maior média e média total
*/

let leia = require("readline-sync")
let medd = 0
let medm = 0
let meda = 0
let med = 1
for (i = 0; med > 0;){
    console.log("Qual a média obtida: ")
    med = leia.questionFloat()
    if (med > 0 && i == 0){
        medm = med
        medd = med
    }
    if (med > 0 && med > medm) {
        medm = med
    }
    if (med > 0 && med < medd){
        medd = med
    }
    if (med > 0){
        meda = meda + med
    }
    i++
}
mediatotal = meda / (i-1)
console.log(`A maior média foi ${medm}, a menor foi ${medd} e a média da turma foi ${mediatotal}`)