// 1° passo: ler o 1° número (n1) 
// 2° passo: ler o 2° número (n2)
// 3° passo: ler o 3° número (n3)
/* 4° passo: criar condição: se n1 > n2 e n1 > n3
criar 2° condição: se n2 < n3 informar a ordem n1; n3; n2
criar 3° condição: se n2 > n3 informar a ordem n1; n2; n3 
*/
/* 5° passo: criar condição: se n2 > n1 e n2 > n3
criar 2° condição: se n1 < n3 informar a ordem n2; n3; n1
criar 3° condição: se n1 > n3 informar a ordem n2; n1; n3 
*/
/* 6° passo: criar condição: se n3 > n1 e n3 > n2
criar 2° condição: se n1 > n2 informar a ordem n3; n1; n2
criar 3° condição: se n1 < n2 informar a ordem n3; n2; n1 
*/

let n1 = 1
let n2 = 3
let n3 = 2

if (n1 > n2 && n1 > n3 ){
    if (n2 < n3 ){
        console.log("A ordem é: "+n1+" "+n3+" "+n2)
    }
    else if (n2 > n3){
        console.log("A ordem é: "+n1+" "+n2+" "+n3)
    }else {
        console.log("Só funciona se não tiver número repetido, o programador tava cansado demais")
    }
}
else if (n2 > n1 && n2 > n3 ){
    if (n1 < n3 ){
        console.log("A ordem é: "+n2+" "+n3+" "+n1)
    }
    else if (n1 > n3){
        console.log("A ordem é: "+n2+" "+n1+" "+n3)
    }else {
        console.log("Só funciona se não tiver número repetido, o programador tava cansado demais")
    }
}
else if (n3 > n1 && n3 > n2 ){
    if (n1 > n2 ){
        console.log("A ordem é: "+n3+" "+n1+" "+n2)
    }
    else if (n1 < n2){
        console.log("A ordem é: "+n3+" "+n2+" "+n1)
    }else {
        console.log("Só funciona se não tiver número repetido, o programador tava cansado demais")
    }
} 
else {
    console.log("Só funciona se não tiver número repetido, o programador tava cansado demais")
}