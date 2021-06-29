// 1° passo: ler o dia
// 2° passo: ler o mês
// 3° passo: ler o ano
// 4° passo: criar condição: se o dia for 30 e o mês 12, subtrair 29 dos dias, 11 dos meses e adicionar ao ano e imprimir
// 5° passo: criar condição: se o dia for 30 e o mês menor que 12, subtrair 29 do dia, adicionar 1 ao mês e imprimir
// 6° passo: criar condição: se o dia dor menor que 30, adicionar 1 ao dia e imprimir

let dia = 30
let mes = 12
let ano = 2005
if (dia == 30 && mes == 12){
    let so = dia-29
    let os = mes-11
    let an = ano+1
    console.log("A data seguinte é "+so+"/"+os+"/"+an)
}
else if (dia == 30 && mes < 12){
    let n1 = dia-29
    let n2 = mes+1
    console.log("A data seguinte é "+n1+"/"+n2+"/"+ano)
}
else if(dia < 30){
    let n3 = dia+1
    console.log("A data seguinte é "+n3+"/"+mes+"/"+ano)
}