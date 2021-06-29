// 1° passo: criar a variavel que receberá o número a ser multiplicado
// 2° passo: criar um for criando um loop enquanto o indice for menor que 200
// 3° passo: criar um array onde cada valor será a multiplicação do número pelo indice até o indice+9
// 4° passo: mostrar os 10 indices mas a multiplicação dele pelo número em um loop até chegar 200

let num = 0.06
for (mul = 1; mul < 201; mul=mul+10){
    cal = [(num * mul), ((mul+1)*num), ((mul+2)*num), (mul+3)*num, (mul+4)*num, (mul+5)*num, (mul+6)*num, (mul+7)*num, (mul+8)*num, (mul+9)*num]
    console.log(`${mul} = ${cal[0]}, ${mul+1} = ${cal[1]}, ${mul+2} = ${cal[2]},  ${mul+3} = ${cal[3]}, ${mul+4} = ${cal[4]},  ${mul+5} = ${cal[5]},  ${mul+6} = ${cal[6]},  ${mul+7} = ${cal[7]},  ${mul+8} = ${cal[8]},  ${mul+9} = ${cal[9]}`)
}