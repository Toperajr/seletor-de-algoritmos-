leia = require("readline-sync")
console.log("\nIniciando programa...pronto! \nquando quiser sair, digite 0 no menu de escolhas.")
console.log('\x1b[1m\x1b[45m%s\x1b[0m', "MENU DE ESCOLHAS")

ex = li = 1
while (li != 0) {
console.log("\nDigite a lista que deseja executar")
li = leia.questionInt()
if (li == 0){break}

if (li == 1){
    console.log('\x1b[32m\x1b[1m%s\x1b[0m', "Você está na lista 1")
    console.log("Digite o exercicio da lista")
    a1 = leia.questionInt()
        if (a1 <= 40){
        require(`./lista1/E${a1}L1.js`)
        delete require.cache[require.resolve(`./lista1/E${a1}L1.js`)]        }
        else{
            console.log("Não existe esse exercicio nesta lista.")
        }
}
else if (li == 2){
    console.log('\x1b[31m\x1b[1m%s\x1b[0m', "Você está na lista 2")
    console.log("Digite o exercicio da lista")
    a1 = leia.questionInt()
        if (a1 <= 25){
        require( `./lista2/E${a1}L2.js`)
        delete require.cache[require.resolve(`./lista2/E${a1}L2.js`)] 
        }
        else{
            console.log("Não existe esse exercicio nesta lista.")
        }
}
else if (li == 3){
    console.log('\x1b[36m\x1b[1m%s\x1b[0m', "Você está na lista 3")
    console.log("Digite o exercicio da lista")
    a1 = leia.questionInt()
        if (a1 <= 26){
        require( `./lista3/E${a1}L3.js`)
        delete require.cache[require.resolve(`./lista3/E${a1}L3.js`)] 
        }
        else{
            console.log("Não existe esse exercicio nesta lista.")
        }
    }
} 
