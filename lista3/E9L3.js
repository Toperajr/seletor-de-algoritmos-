/*
para criar este programa será necessário:
* criar 3 variaveis (n1 = -1, n2 = 1; n3 = 0)
* criar o loop for:
i = 1, n3 < (limite que queremos); i++ (apesar do contador não ter muita utilizade no programa, podemos usar ele como marcador)
dentro do loop:
n3 recebe (n1+n2)
escrever n3
n1 recebe n2
n2 recebe n3
*/

n1 = -1
n2 = 1
n3 = 0
for (i = 1; i < 14; i++){
	n3 = n1 + n2
	console.log(n3)
	n1 = n2
	n2 = n3
}
