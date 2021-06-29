// Para este programa é necessário readline-sync
// 1° passo: perguntar qual tipo de transformação o usuário quer informar
// 2° passo: criar condição: se for para celsius entrar nas linhas abaixo
/*
#pedir do usuário o valor em Fahrenheit  (fa)
#converter para celsius através da seguinte formula((fa+32)*(5/9))
#infomar para o usuário
*/

// 2.2° passo: criar condição: se for para Fahrenheit entrar nas linhas abaixo
/*
#pedir do usuário o valor em Celsius (ce)
#converter para Fahrenheit através da seguinte fórmula(ce*(5/9)+32)
#informar para o usuário
*/ 

var readLineSync = require("readline-sync")
console.log("Olá, gostaria de converter para Celsius ou para Fahrenheit? insira a resposta abaixo.")
let re = readLineSync.question()
if (re == "Celsius"){
    let fa= readLineSync.questionFloat("Insira o valor de graus em Fahrenheit: ")
    let fr = ((fa-32)*(5/9))
    console.log(`Isto são ${fr}° em Celsius`)
}
else if (re == "Fahrenheit"){
    let ce= readLineSync.questionFloat("Insira o valor de graus em Celsius: ")
    let cl = (ce*(9/5))+32
    console.log(`Isto são ${cl}° em Fahrenheit`)
}
else {
    console.log("Ocorreu um erro inesperado.")
}