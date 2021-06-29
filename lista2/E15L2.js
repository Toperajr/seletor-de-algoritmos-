// Para este programa é necessário readline-sync
// 1° passo: pedir o número da matricula
// 2° passo: pedir o nome do aluno
// 3° passo: pedir o genero (M ou F)
// 4° passo: pedir o curso (“BSI”, “EE”, “EM”, “EC” ou “AQ”)
// 5° passo: pedir o coeficiente de rendimento
// 6° passo: informar a matricula e o nome do aluno
// 7° passo: criar duas condições: se o genero for M, imprimir masculino, se o genero for F, imprimir feminino
// 8° passo: criar 5 condições, sendo só uma delas true, a que receberá o curso e imprimirá o mesmo
// 9° passo: criar 5 condições
/*
“Excelente” se o coeficiente for [9, 10], “Bom” se entre [7, 9), “Regular” se entre [5, 7), “Necessita melhoras”
se entre [3, 5) e “Preocupante” se entre [0, 3) e imprimir uma das avaliações dependendo do coeficiente
*/

var readLineSync = require("readline-sync")
console.log("Digite o número da sua matrícula:")
let ma = readLineSync.question()
console.log("Digite seu nome completo:")
let no = readLineSync.question()
console.log("Digite M caso seja um menino, F caso seja uma menina")
let ge = readLineSync.question()
console.log("Digite a sigla do seu curso:")
let cr = readLineSync.question()
console.log("Digite o coeficiente do seu rendimento (é obrigatório o valor ser de 0 a 10)")
let ce = readLineSync.questionInt()

console.log(`Resultados\nNome: ${no}\nn° da matrícula: ${ma}`)
if (ge == "M"){
    console.log("gênero: Masculino")
}
else if(ge == "F"){
    console.loog("gênero: Feminino")
}
if (cr == "BSI"){
    console.log("Curso: Bacharelado em Sistemas de Infomação")
}
else if(cr == "EE"){
    console.log("Curso: Engenharia Elétrica")
}
else if(cr == "EM"){
    console.log("Curso: Engenharia Mecânica")
}
else if(cr == "EC"){
    console.log("Curso: Engenharia Civil")
}
else if(cr == "AQ"){
    console.log("Curso: arquitetura")
}
if (ce >= 9 && ce <= 10){
    console.log("Coeficiente de rendimento: Excelente")
}
else if(ce >= 7 && ce < 9){
    console.log("Coeficiente de rendimento: Bom")
}
else if(ce >= 5 && ce < 7){
    console.log("Coeficiente de rendimento: regular")
}
else if(ce >= 3 && ce < 5){
    console.log("Coeficiente de rendimento: Necessita melhoras")
}
else if(ce >= 0 && ce < 3){
    console.log("Coeficiente de rendimento: Preocupante")
}