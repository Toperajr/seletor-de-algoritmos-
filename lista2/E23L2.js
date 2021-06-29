// Para este programa é necessário readline-sync
// 1° passo: pedir o saldo médio do cliente
// 2° passo: criar uma condição com intervalo de valor para cada saldo informado
// 3° passo: multiplicar o valor pela porcentagem definida para o intervalo e dividir por 100
// 4° passo: informar o saldo e o crédito ganho

var readLineSync = require("readline-sync")
let saldo = readLineSync.questionInt("Quanto foi teu saldo medio? ")

if ( saldo > 0 && saldo <= 200){
    let cre = 0
    console.log(`Teu saldo médio foi ${saldo}, e seu crédito será ${cre}`)
}
else if ( saldo >= 201 && saldo <= 400){
    let cre1 = (saldo*20)/100
    console.log(`Teu saldo médio foi ${saldo}, e seu crédito será ${cre1}`)
}
else if ( saldo >= 401 && saldo <= 600){
    let cre2 = (saldo*30)/100
    console.log(`Teu saldo médio foi ${saldo}, e seu crédito será ${cre2}`)
}
else if ( saldo > 601){
    let cre3 = (saldo*40)/100
    console.log(`Teu saldo médio foi ${saldo}, e seu crédito será ${cre3}`)
}