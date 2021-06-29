/*
Para esse programa será necessário:
* ler o dia, mês e ano das duas datas -> (a1, m1 e d1; a2, m2 e d2)
* subtrair os anos e transformar em dias -> (a2 - a1)*360
* subtrair os meses e transformar em dias -> (m2 - m1)*30
* criar duas condições para os dias e os dias dos meses em números positivos
se os meses em dias forem menor que 0, multiplicar por -1
se os dias forem menor que 0, multiplicar por -1
* somar o total de dias dos anos, meses e dias e guardar em uma variavel
* criar loop while, equanto a1 for menor ou igual que a2, executar:
se o resto de a1 por 4 for 0 e o resto de a1 por 100 for diferente de 0, acresentar 1 a variavel de dias extras dos anos bisextos
a1 é somado com mais 1 a cada execução do loop while
* informar o total de dias mais os dias extras dos anos bisextos
*/
var readLineSync = require("readline-sync")
console.log("Digite o dia: ")
d1 = readLineSync.questionInt()
console.log("Digite o mês: ")
m1 = readLineSync.questionInt()
console.log("Digite o ano: ")
a1 = readLineSync.questionInt()
console.log("Digite o dia segunda data: ")
d2 = readLineSync.questionInt()
console.log("Digite o mês da segunda data: ")
m2 = readLineSync.questionInt()
console.log("Digite o ano da segunda data: ")
a2 = readLineSync.questionInt()

tot = (a2 - a1) * 365
met = (m2 - m1) * 30
if (met < 0){
    met = met * (-1)
}
dit = (d2 - d1)
if (dit < 0){
    dit = dit * (-1)
}
dx = 0
totx = tot + met + dit
while (a1 <= a2){

   if(a1 % 4 == 0 && a1 % 100 != 0){
	dx++   
   }
a1++
}

total = totx + dx
console.log("O total de dias passados foram: "+total)