//17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever 
//uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o 
//aluno é aprovado). Escrever também a média calculada. 

nota1 = parseFloat(prompt("Digite a nota 1: "))
nota2 = parseFloat(prompt("Digite a nota 2: "))

media = (nota1 + nota2) / 2

alert("A média das notas foi de: " + media)

if (media >= 6) {alert("Aluno Aprovado!")}else{alert("Aluno reprovado")}