/*
para o programa será necessário:
* pedir do usuário a massa do material (ma)
* criar a variavel do tempo total em segundos (i)
* criar o loop while: enquanto a massa for maior ou igual a 0.5
ma recebe ma / 2
i recebe i + 50
* informar a massa inicial e final
* transformar o tempo total de segundos para horas, minutos e segundos
para horas = i / 3600
para minutos = (i%3600) / 60
para segundos = (i%3600) % 60
* informar o tempo em horas, minutos e segundos
*/
var readLineSync = require("readline-sync")
console.log("Digite a massa do material: ")
ma = readLineSync.questionFloat()
i = 0
mi = ma
while (ma >= 0.5) {
    ma = ma / 2
    i=i+50
}

console.log("A massa final é: "+ma+". A massa incial era: "+mi)
h = parseInt(i / 3600)
rh =  i % 3600
m = parseInt(rh/60)
s = rh % 60
console.log(`O periodo levado foi de ${h} hora(s), ${m} minuto(s) e ${s} segundos`)