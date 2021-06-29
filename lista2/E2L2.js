// Para este programa é necessário readline-sync
// 1° passo: pedir o primeiro número
// 2° passo: pedir o segundo número
// 3° passo: pedir o teceriro número
// 4° passo: criar a condição: se o 1° n° for maior que o 2° e 3° informar o 1°
// 5° passo: criar a condição: se o 2° n° for maior que o 1° e 3° informar o 2°
// 6° passo: criar a condição: se o 3° n° for maior que o 1° e 2° informar o 3°

var readLineSync = require("readline-sync")
console.log("digite um número")
let n1 = readLineSync.questionFloat()
console.log("digite outro número")
let n2 = readLineSync.questionFloat()
console.log("digite outro número")
let n3 = readLineSync.questionFloat()

if (n1 > n2 && n1 > n3 ){
    console.log ("o maior número é o "+n1)
}
else if (n2 > n1 && n2 > n3 ){
    console.log ("o maior número é o "+n2)
}
else if (n3 > n2 && n3 > n1 ){
    console.log ("o maior número é o "+n3)
}