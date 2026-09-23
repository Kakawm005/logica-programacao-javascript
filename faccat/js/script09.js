//13) Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
//Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5.

let nota1 = parsefloat(prompt("Digite a nota 1: "))
let nota2 = parsefloat(prompt("Digite a nota 2: "))
let nota3 = parsefloat(prompt("Digite a nota 3: "))

let media_final = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10

alert(`A média final é de: ${media_final}`)