// 1° passo: criar 6 variaveis: n = 1 (números a serem lidos), qtdp = 0 (quantidade de pares),
// qtdi = 0 (quantidade de impares), tot = 0 (valor geral), totp = 0 (valor total de pares), a = 0 (contador de números pares)
// 2° passo: criar laço for (i recebe 0; enquanto n for diferente de 0; i recebe i + 1)
/*
ler n
criar condicional: se (n for maior que 0 e n % 2 for igual a 0 ) qtdp recebe qtdp + 1
criar condicional: se (n for maior que 0 e n % 2 for igual a 0 ) totp recebe totp + n, a recebe a + 1
criar condicional: se (n for maior que 0 e n % 2 for diferente de 0 ) qtdi recebe qtdi + 1
criar condicional: se (n for maior que 0) tot recebe tot + n
fim do laço
*/
// 3° passo: criar variavel media (média geral): tot / (i-1) 
// 4° passo: criar variavel mediap (média dos pares): totp / a 
// 5° passo: escrever qtdp, qtdi, media e mediap

let leia = require("readline-sync")
let n = 1
let qtdp = 0
let qtdi = 0
let tot = 0
let totp = 0
let a = 0
for (i = 0; n != 0; i++){
    console.log("Digite um número postivo: ")
    n = leia.questionInt()

    if (n > 0 && n % 2 == 0){
        qtdp++
    }
    if (n > 0 && n % 2 == 0){
        totp += n
        a++
    }
    if (n > 0 && n % 2 != 0){
        qtdi++
    }
    if (n > 0){
        tot += n
    }
}
let media = tot/(i-1)
let mediap = totp/a
console.log(`A quantidade de números pares é ${qtdp}, a de números impares é ${qtdi}, a média de pares é ${mediap} e a geral é ${media}`)