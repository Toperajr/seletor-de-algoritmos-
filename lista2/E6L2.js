// 1° passo: ler o número
// 2° passo: criar a condição: se o n° for maior que 9 informar alerta de nivel grave
// 3° passo: criar a condição: se o n° for de 0 a 3 informar alerta de nivel baixo
// 4° passo: criar a condição: se o n° ser maior que 3 até 6 informar alerta de nivel médio
// 5° passo: criar a condição: se o n° ser maior que 6 até 9  informar alerta de nivel alto

let n1 = 10

if (n1 > 9 && n1 <= 10){
    console.log (n1+" alerta, nivel GRAVE!")
}
else if (n1 >= 3 && n1 <= 3){
    console.log (n1+" alerta, nivel BAIXO")
}
else if (n1 > 3 && n1 <= 6){
    console.log (n1+" alerta, nivel normal")
}
else if (n1 > 6 && n1 <= 9){
    console.log (n1+" alerta, nivel ALTO")
}
else {
    console.log ("ERRO, o número está fora da escala de niveis")
}
