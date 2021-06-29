// 1° passo: ler o ano do carro 
// 2° passo: ler o preço do carro
// 3° passo: criar condição, se o ano for menor que 1990, calcular 1% do valor e adicionar ao mesmo, imprimir taxa
// 4° passo: criar condição, se o ano for maior que 1990, calcular 1,5% do valor e adicionar ao mesmo, imprimir taxa

let ano = 1991
let pre = 5000
if (ano < 1990){
    let por = (pre*1)/100
    console.log("O imposto em reais será: "+por)
}
else if(ano >= 1990){
    let per = (pre*1.5)/100
    console.log("O imposto em reais será: "+per)
}