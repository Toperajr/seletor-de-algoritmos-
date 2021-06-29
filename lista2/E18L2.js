// 1° passo: ler o dia
// 2° passo: ler o mês
// 3° passo: ler o ano
// 4° passo: criar condição: se o dia for 1 e o mês 1, adicionar 29 aos dias, 11 aos meses e subtrair 1 ao ano e imprimir
// 5° passo: criar condição: se o dia for 1 e o mês menor que 12, adicionar 29 aos dia, subtrair 1 do mês e imprimir
// 6° passo: criar condição: se o dia dor menor que 30, subtrair 1 do dia e imprimir

let dia = 1
let mes = 6
let ano = 2005
if (dia == 1 && mes == 1){
    let so = dia+29
    let os = mes+11
    let an = ano-1
    console.log("A data anterior é "+so+"/"+os+"/"+an)
}
else if (dia == 1 && mes < 12){
    let n1 = dia+29
    let n2 = mes-1
    console.log("A data anterior é "+n1+"/"+n2+"/"+ano)
}
else if(dia <= 30){
    let n3 = dia-1
    console.log("A data anterior é "+n3+"/"+mes+"/"+ano)
}