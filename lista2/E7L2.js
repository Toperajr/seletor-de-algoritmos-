// Para este programa é necessário readline-sync
// 1° passo: pedir o 1° número (n1)
// 2° passo: pedir o 2° número (n2)
// 3° passo: pedir o 3° número (n3)
// 4° passo: criar a condição: se o resto da divisão de n1/n1 for 0 informar que n1 é multiplo de n1
// 5° passo: criar a condição: se o resto da divisão de n1/n2 for 0 informar que n1 é multiplo de n2
// 6° passo: criar a condição: se o resto da divisão de n1/n3 for 0 informar que n1 é multiplo de n3
// 7° passo: criar a condição: se o resto da divisão de n2/n1 for 0 informar que n2 é multiplo de n1
// 8° passo: criar a condição: se o resto da divisão de n2/n2 for 0 informar que n2 é multiplo de n2
// 9° passo: criar a condição: se o resto da divisão de n2/n3 for 0 informar que n2 é multiplo de n3
// 10° passo: criar a condição: se o resto da divisão de n3/n1 for 0 informar que n3 é multiplo de n1
// 11° passo: criar a condição: se o resto da divisão de n3/n2 for 0 informar que n3 é multiplo de n2
// 12° passo: criar a condição: se o resto da divisão de n3/n3 for 0 informar que n3 é multiplo de n3

var readLineSync = require("readline-sync")
console.log("digite um número")
let n1 = readLineSync.questionFloat()
console.log("digite outro número")
let n2 = readLineSync.questionFloat()
console.log("digite outro número")
let n3 = readLineSync.questionFloat()

if (n1 % n1 == 0){
    console.log(`${n1} é multiplo de ${n1}`)
}
if (n1 % n2 == 0){
    console.log(`${n1} é multiplo de ${n2}`)
}if (n1 % n3 == 0){
    console.log(`${n1} é multiplo de ${n3}`)
}if (n2 % n1 == 0){
    console.log(`${n2} é multiplo de ${n1}`)
}if (n2 % n2 == 0){
    console.log(`${n2} é multiplo de ${n2}`)
}if (n2 % n3 == 0){
    console.log(`${n2} é multiplo de ${n3}`)
}if (n3 % n1 == 0){
    console.log(`${n3} é multiplo de ${n1}`)
}if (n3 % n2 == 0){
    console.log(`${n3} é multiplo de ${n2}`)
}if (n3 % n3 == 0){
    console.log(`${n3} é multiplo de ${n3}`)
}