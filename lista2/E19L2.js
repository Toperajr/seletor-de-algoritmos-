// 1° passo: ler o valor total em reais (VT)
// 2° passo: ler o tanto de prestações (PR)
// 3° passo: calcular o valor de cada prestação (VT/PR)
// 4° passo: criar condição: se o número de prestações for maior ou igual a 24, dividir o VT por 10 e adcionar o resultado a ele
// 5° passo: criar condição: se o número de prestaçõesfor maior ou igual a 36, usar a fórmula(VT*15)/100 e somar o resultado ao VT
// 6° passo: informar o valor da prestação 

let VT = 2500.00
let PR = 25
let cal = (VT/PR).toFixed(2)
if (PR >= 24 ){
    let per = VT/10
    let cal1 = VT+per
    let cal2 = (cal1/PR).toFixed(2)
    console.log("Cada prestação será "+cal2)
}
else if (PR >= 36 ){
    let per2 = (VT/15)/100
    let call = VT+per2
    let calu = (call/PR).toFixed(2)
    console.log("Cada prestação será "+calu)
}
else {
    console.log("O valor de cada prestação será "+cal)
}