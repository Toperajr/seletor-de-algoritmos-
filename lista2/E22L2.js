/* supondo que o cargo de gerente rende 2.076.00, 7.737.00 para o engenheiro e 2809.00 para o técnico.
1° passo: ler o salário a ser calculado.
2° passo: criar condições para se descobrir qual o código, e entrar no processo de calculo
3° passo: calcular o aumento descobrindo a porcentagem e adicionando ao salário
4° passo: informar o aumento obtido
*/

let cod = "104"
let sal = 0 //esta linha serve para especificar o salário caso ele não esteja entre os 3 principais cargos

if (cod == "101"){
    let cal = (2076.00/10)
    let som = cal+2076.00
    console.log(`O salário antigo era de 2.076.00, agora recebeu um aumento de ${cal}, o salário final é ${som}`)
}
else if (cod == "102"){
    let cal1 = (7737.00*20)/100
    let som1 = cal1+7737.00
    console.log(`O salário antigo era de 7.737.00, agora recebeu um aumento de ${cal1}, o salário final é ${som1}`)
}
else if (cod == "103"){
    let cal2 = (2809.00*30)/100
    let som2 = cal2+2809.00
    console.log(`O salário antigo era de 2.809.00, agora recebeu um aumento de ${cal2}, o salário final é ${som2}`)
}
else if (cod != "101" && cod != "102" && cod != "103"){
    let cal4 = (sal/40)/100
    let som4= cal4+sal
    console.log(`O salário antigo era de ${sal} agora recebeu um aumento de ${cal4}, o salário final é ${som4}`)
}
