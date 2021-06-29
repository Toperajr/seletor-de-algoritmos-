// Para este programa é necessário readline-sync
// 1° passo: criar condição: "o animal é um felino?" caso sim, entrar em nova condição, caso não, pular para 2° passo
/* continuação do 1° passo
criar condição: "tem juba?" caso sim, é um leão, se não, continuar abaixo
criar condição: "tem pintas?" caso sim, é uma onça pintada, se não, continuar abaixo
criar condição: "é doméstico?" caso sim, é um gato, caso não, não sabe-se o animal
*/
// 2° passo: criar condição: "o animal é um peixe?" caso sim, entrar em nova condição, caso não, pular p/ 3° passo
/* continução do 2° passo
criar condição: "é um mamifero?" se sim, é baleia, se não, continuar o código
criar condição: "tem milhares de dentes?" se sim, é um tubarão, se não, continuar o código
criar condição: "é um peixe que cabe na palma da mão?" se sim, é um lambari, se não, continuar código
criar condição: "ele dá choque e se parece com uma cobra?" se sim, é uma enguia, se não, continuar código
criar condição: "ele dá choque?" se sim, é uma arraia, se não, não sabe-se o animal
*/
// 3° passo: criar condição: "Seu animal pode ser representado pelo personagem Perry de Phineas e Ferb?" se sim, é um ornitorrinco, se não, continuar código
// 4° passo: "é uma ave?" se sim, ir para próxima condição, se não, não sabe-se o animal
/* continuação 4° passo
criar condição: "ele nada, anda e voa?" se sim, é o pato, se não, continuar código
criar condição: "ele vive no polo sul?" se sim, é o pinguim, se não, continuar código
criar condição: "tem gosto de frango?" se sim, é a galinha, se não, continuar código
criar condição: "voa a cima das montanhas?" se sim, é uma águia, se não, continuar código
criar condição: "tem um longo pescoço e bota uns ovos grandes?" se sim, é a águia, se não, continuar código
criar condição: "é o animal que o batman usa como simbolo?" se sim, é o morcego, se não, não sabe-se o animal
*/
var readLineSync = require("readline-sync")
console.log("Responda as perguntas a seguir somente com sim ou não.")
console.log("O animal é um felino? ")
let r1 = readLineSync.question()
console.log("O animal é um peixe? ")
let re2 = readLineSync.question()
if(r1 == "sim"){
    let f1 = readLineSync.question("Tem juba? ")
    if(f1 == "sim"){
        console.log("Então é um leão.")
    }
    else if(f1 == "nao"){
        let f2 = readLineSync.question("Tem pintas? ")
        if(f2 == "sim"){
            console.log("Então é uma onça-pintada.")
        }
        else if(f2 == "nao"){
            console.log("É um animal doméstico?  ")
            let f3 = readLineSync.question()
            if(f3 == "sim"){
                console.log("Então é o gato. ")
            }
            else {
                console.log("Não sei qual o animal.")
            }

        }
        
    }
}
else if(re2 == "sim"){
    let p1 = readLineSync.question("É um mamifero? ")
    if(p1 == "sim"){
        console.log("Então é uma baleia.")
    }
    else if(p1 == "nao"){
        letp2 = readLineSync.question("Tem milhares de dentes? ")
        if(p2 == "sim"){
            console.log("Então é um tubarão.")
        }
        else if(p2 == "nao"){
            let p3 = readLineSync.question("É um peixe que cabe na palma da mão? ")
            if (p3 == "sim"){
                console.log("Então é um lambari. ")
            }
            else if(p3 == "nao") {
                let p4 = readLineSync.question("Ele dá choque e se parece com uma cobra? ")
                if (p4 == "sim") {
                    console.log("É uma enguia.")
                }
                else if(p4 == "nao"){
                    let p5 = readLineSync.question("Ele dá choque? ")
                    if (p5 == "sim"){
                        console.log("Então é uma arraia")
                    }
                    else {
                        console.log("Não sei qual o animal.")
                    }}
                }
            }

        }
        
    }


else if (r1 == "nao" && re2 == "nao"){
console.log("É uma ave? ")
let a1 = readLineSync.question()
if(a1 == "sim"){
    let a2 = readLineSync.question("Ele nada, anda e voa? ")
    if(a2 == "sim"){
        console.log("Então é o pato.")
    }
    else if(a2 == "nao"){
        let a3 = readLineSync.question("Ele vive no polo sul? ")
        if (a3 == "sim"){
            console.log("Então é o pinguim.")
        }
        else if(a3 == "nao"){
            let a4 = readLineSync.question("Tem gosto de frango? ")
            if (a4 == "sim"){
                console.log("Então é a galinha.")
            }
            else if(a4 == "nao"){
                let a5 = readLineSync.question("Voa acima das montanhas? ")
                if (a5 == "sim"){
                    console.log("Então é a águia.")
                }
                else if(a5 == "nao"){
                    console.log("Tem um longo pescoço e bota ovos grandes? ")
                    let a6 = readLineSync.question()
                    if(a6 == "sim"){
                        console.log("Então é o avestruz.")
                    }
                    else if(a6 == "nao"){
                        console.log("O animal é representado como o simbolo do batman?")
                        let a7 = readLineSync.question()
                        if(a7 == "sim"){
                            console.log("Então é o morcego.")
                        }else if(a7 == "nao"){
                        let orni = readLineSync.question("Seu animal pode ser representado pelo personagem Perry do desenho Phineas e Ferb? ")
                            if(orni == "sim"){
                            console.log("Então é o ornitorrinco.") }
                        }else {
                            console.log("Não sei qual o animal.")
                        }
                    }
                    }

                }

            }

        }

    }

}
