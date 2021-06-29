// 1° passo: criar 4 variaveis: n = 1 (números a serem lidos), tot = 0 (valor total), qtdp = 0 (quantidade de positivos), qtdn = 0 (quantidade de negativos)
// 2° passo: criar laço for: (i (contador) recebe 0; enquanto n for diferente de 0; i recebe i + 1)
/*
ler o valor de n
criar condicional: se (n for menor que 0) qtdn recebe qtdn + 1
criar condicional: se (n for maior que 0) qtdn recebe qtdp + 1
criar condicional: se (n for diferente de 0) tot recebe tot + n
fim do laço
*/ 
// 3° passo: criar variavel media (media geral): tot / (i-1) 
// 4° passo: criar variavel percp (percentual de positivos): qtdp*100/(i-1)
// 5° passo: criar variavel percn (percentual de negativos): qtdn*100/(i-1)
// 6° passo: escrever a quantidade de números positivos e negativos, informar a média
// 7° passo: escrever o percentual de positivos e negativos

let leia = require("readline-sync")
n = 1
tot = 0
qtdp = 0
qtdn = 0
for (i = 0; n != 0; i++){
    console.log("Digite um número: ")
    n = leia.questionInt()
    if(n < 0){
        qtdn++
    }
    if(n > 0){
        qtdp++
    }
    if (n != 0){
        tot += n
    }
}
media = tot / (i-1)
percp = qtdp*100/(i-1)
percn = qtdn*100/(i-1)
console.log(`A média foi ${media}, a quantidade de números positivos foi ${qtdp} e de negativos foi ${qtdn}`)
console.log("O percentual de números positivos foi de "+percp+"%"+" o de números negativos foi de "+percn+"%")