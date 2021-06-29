// Para este programa é necessário readline-sync
// 2° passo: pedir o código do lanche
// 3° passo: pedir a quantidade
// 4° passo: criar uma condição para cada lanche em que haja um calculo do valor dela pela quantidade
// 5° passo: informar o calculo anterior ao usuário

var readLineSync = require("readline-sync")

console.log("Digite o código do lanche que você quer: ")
let lan = readLineSync.question()
console.log("Quantos você deseja? ")
let qtd = readLineSync.questionInt()
if (lan == "100"){
    let qtd1 = qtd * 1.10
    let tot = qtd1.toFixed(2)
    console.log("Deu "+tot+" reais")
}
else if (lan == "101"){
    let qtd2 = qtd * 1.30
    let tot1 = qtd2.toFixed(2)
    console.log("Deu "+tot1+" reais")
}
else if (lan == "102"){
    let qtd3 = qtd * 1.50
    let tot2 = qtd3.toFixed(2)
    console.log("Deu "+tot2+" reais")
}
else if (lan == "103"){
    let qtd4 = qtd * 1.10
    let tot3 = qtd4.toFixed(2)
    console.log("Deu "+tot3+" reais")
}
else if (lan == "104"){
    let qtd5 = qtd * 1.30
    let tot4 = qtd5.toFixed(2)
    console.log("Deu "+tot4+" reais")
}
else if (lan == "105"){
    let qtd6 = qtd * 1.00
    let tot5 = qtd6.toFixed(2)
    console.log("Deu "+tot5+" reais")
}
else{
    console.log("Um erro inesperado ocorreu.")
}