// Para este programa é necessário readline-sync
// 1° passo: pedir o primeiro número
// 2° passo: pedir o segundo número
// 3° passo: realizar a soma dos dois números (x+y)
// 4° passo: mostrar o resultado

var readLineSync = require("readline-sync")

console.log("Fale um número aí")
var n1 = readLineSync.questionFloat()
console.log("Agora fale outro")
var n2 = readLineSync.questionFloat()
var n3 = n1+n2
console.log("A soma desses dois números é: "+n3)