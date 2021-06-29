/*
para esse programa será necessário:
* criar laço while do, enquanto n1 > n2 > n3
* criar 3 variaveis que representem 3 números digitados pelo usuário (n1, n2 e n3)
* criar variavel soma, (n1+n2+n3)
* criar variavel produto, (n1*n2*n3)
* criar variavel media, (soma/3)
* criar condição: se n1 > n2 >3
mostrar a soma, produto e media dos números
*/

do {
    let leia = require("readline-sync")
    console.log("Digite o primeiro número: ")
    n1 = leia.questionFloat()
    console.log("Digite o segundo número número: ")
    n2 = leia.questionFloat()
    console.log("Digite o terceiro número número: ")
    n3 = leia.questionFloat()
    soma = n1+n2+n3
    prod = n1*n2*n3
    medi = (soma / 3)
    if(n1 < n2 && n2 < n3){
        console.log(`A soma dos números é ${soma}, o produto dos números é ${prod} e a média é ${medi.toFixed(2)}`)
    }
} while (n1 > n2 > n3)