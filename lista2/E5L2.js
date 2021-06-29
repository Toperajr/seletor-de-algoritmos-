// 1° passo: ler o número
// 2° passo: criar a condição: se o n° for maior que 9 e menor ou igual a 10, informar alerta de nivel grave
// 3° passo: criar a condição: se o n° for menor ou igual a 9 e maior ou igual a 0 informar alerta de nivel normal
// 4° passo: criar um alerta para o caso de o n° estar fora da escala de 0 a 10

let n1 = 30

if (n1 > 9 && n1 <= 10){
    console.log (n1+" alerta, nivel GRAVE!")
}
else if (n1 >= 0 && n1 <= 9){
    console.log (n1+" nivel normal")
}
else {
    console.log ("ERRO, o número está fora da escala de niveis")
}