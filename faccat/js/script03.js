//7) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade 
//dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 

anos = parseInt(prompt("Digite quantos anos de vida você tem: "))
meses = parseInt(prompt("Digite quantos meses de vida você tem: "))
dias = parseInt(prompt("Digite quantos dias de vida você tem: "))

dias_totais = (anos * 356) + (meses * 30) + dias

alert(`Você tem ${dias_totais} dias de vida totais.`)