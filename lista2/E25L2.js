// 1° passo: pedir o tamanho do 1° lado (n1)
// 2° passo: pedir o tamanho do 2° lado (n2)
// 3° passo: pedir o tamanho do 3° lado (n3)
// 4° passo: criar condição: ((n1+n2)<n3) ou ((n3+n2)<n1) ou ((n1+n3)<n2) não é triangulo, informar
// 5° passo: criar condição: se n1 = n2 = n3, é triangulo equilátero, informar
// 6° passo: criar condição: se n1 = n2 != n3 ou se n1 = n3 != n2 ou se n2 = n3 != n1, é triangulo isoceles, informar
// 7° passo: criar condição: se n1 != n2 != n3 é triangulo escaleno, informar

var readLineSync = require("readline-sync")
console.log("digite o tamanho do 1° lado ")
let n1 = readLineSync.questionFloat()
console.log("digite o tamanho do 2° lado ")
let n2 = readLineSync.questionFloat()
console.log("digite o tamanho do 3° lado ")
let n3 = readLineSync.questionFloat()

if ((n1+n2)<n3 || (n3+n2)<n1 || (n1+n3)<n2) {
    console.log("Isso ae não é um triângulo filhão")
}
else if (n1 == n2 && n1 == n3){
    console.log("Isso ae é um triângulo equilátero")
}
else if (n1 == n2 || n2 == n3 || n1 == n3){
    console.log("Isso ae é um triângulo isóceles")
}
else if (n1 != n2 != n3){
    console.log("Isso ae é um triângulo escaleno")
}
