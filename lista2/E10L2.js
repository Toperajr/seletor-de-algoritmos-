/* Professor, eu realmente pesquisei esse sistema de notas, mas não faço ideia
de como funciona isso, e nem o que é quebra de pré requisito
então vou supor que a média seja 60 e que abaixo disso ele é reprovado */

// Para este programa é necessário readline-sync
// 1° passo: pedir a 1° nota (n1)
// 2° passo: pedir a 2° nota (n2)
// 3° passo: pedir a 3° nota (n3)
// 4° passo: pedir a 4° nota (n4)
// 5° passo: calcular a média (somar tudo e dividir por 4)
// 6° passo: criar condição: se a média for maior que 60, informar que o aluno passa
// 7° passo: criar condição: se a média for menor que 60, informar que o aluno reprova
// 8° passo: informar que a nota está fora da escala caso ela esteja mesmo fora da escala


var readLineSync = require("readline-sync")
console.log("digite sua primeira nota")
let n1 = readLineSync.questionFloat()
console.log("digite sua segunda nota")
let n2 = readLineSync.questionFloat()
console.log("digite sua terceira nota")
let n3 = readLineSync.questionFloat()
console.log("digite sua quarta nota")
let n4 = readLineSync.questionFloat()

let med = (n1+n2+n3+n4)/4
if (med >= 60 && med <= 100 ){
    console.log("Você está aprovado!")
}
else if (med < 60){
    console.log("Você foi reprovado.")
}
else {
    console.log("Sua nota está fora da escala.")
}