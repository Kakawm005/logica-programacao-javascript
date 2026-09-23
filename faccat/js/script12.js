//16) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
//compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e 
//escreva o custo total da compra.

quantidade_macas = parseInt(prompt("Digite a quantidade de maças que foram compradas: "))

if (quantidade_macas < 12){valor_total = quantidade_macas * 1.30}else {valor_total = quantidade_macas * 1}

alert("O valor total foi de: " + valor_total)