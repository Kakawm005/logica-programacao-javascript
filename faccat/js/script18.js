//18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela 
//poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 

ano_atual = parseInt(prompt("Digite o ano atual:"))
ano_nascimento = parseInt(prompt("Digite o ano do seu nascimento: "))

idade = ano_atual - ano_nascimento

if (idade >= 16) {alert("Pode votar!")}else {alert("Não pode votar!")}