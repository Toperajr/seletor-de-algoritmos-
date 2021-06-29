/* Professor, eu realmente pesquisei esse sistema de notas, mas não faço ideia
de como funciona isso, e nem o que é quebra de pré requisito
então vou supor que a média seja 60 e que abaixo disso ele é reprovado */

// Para este programa é necessário readline-sync
// 1° passo: pedir o peso da 1° nota (n1)
// 2° passo: pedir o peso da 2° nota (n1)
// 3° passo: pedir o peso da 3° nota (n1)
// 4° passo: pedir o peso da 4° nota (n1)
// 5° passo: pedir a 1° nota (n1)
// 6° passo: pedir a 2° nota (n2)
// 7° passo: pedir a 3° nota (n3)
// 8° passo: pedir a 4° nota (n4)
// 9° passo: calcular a média ponderada, multiplicar cada nota pelo seu respectivo peso, somar, e dividir por 10
// 10° passo: criar condição: se a média for maior que 60, informar que o aluno passa
// 11° passo: criar condição: se a média for menor que 60, informar que o aluno reprova
// 12° passo: informar que a nota está fora da escala caso ela esteja mesmo fora da escala

var readLineSync = require("readline-sync")
console.log("digite o peso da primeira nota")
let p1 = readLineSync.questionFloat()
console.log("digite o peso da segunda nota")
let p2 = readLineSync.questionFloat()
console.log("digite o peso da terceira nota")
let p3 = readLineSync.questionFloat()
console.log("digite o peso da quarta nota")
let p4 = readLineSync.questionFloat()
if ((p1+p2+p3+p4)>10){
    console.log("A SOMA DOS PESOS TEM QUE SER MENOS DO QUE 10!\nMas o programa continuará mesmo estando errado.")
}

console.log("digite sua primeira nota")
let n1 = readLineSync.questionFloat()
console.log("digite sua segunda nota")
let n2 = readLineSync.questionFloat()
console.log("digite sua terceira nota")
let n3 = readLineSync.questionFloat()
console.log("digite sua quarta nota")
let n4 = readLineSync.questionFloat()

let med = ((n1*p1)+(n2*p2)+(n3*p3)+(n4*p4))/10
if (med >= 6 && med <= 10 ){
    console.log("Você está aprovado!")
}
else if (med < 6){
    console.log("Você foi reprovado.")
}
else {
    console.log("Sua nota está fora da escala.")
}