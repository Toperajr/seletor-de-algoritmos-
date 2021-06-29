// Para este programa é necessário readline-sync
// 1° passo: pedir o 1° lado
// 2° passo: pedir o 2° lado
// 3° passo: pedir o 3° lado
// 4° passo: fazer a 1° parte do calculo de heron p=(la*lb*lc)/2
// 5° passo: fazer a 2° parte do calculo de hero raiz quadrada de (p*(p-la)*(p-lb)*(p-lc))
// 6° passo: informar o resultado (área)
var readLineSync = require("readline-sync")
console.log("digite o tamanho do 1° lado")
let n1 = readLineSync.questionFloat()
console.log("digite o tamanho do 2° lado")
let n2 = readLineSync.questionFloat()
console.log("digite o tamanho do 3° lado")
let n3 = readLineSync.questionFloat()
let p = (n1+n2+n3)/2 
let a = (Math.sqrt(p*(p-n1)*(p-n2)*(p-n3))).toFixed(2)
console.log("A área deste triângulo será: "+a+"cm²")