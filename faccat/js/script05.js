//9) Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
//Calcular e escrever o valor do novo salário. 

let salario_atual = parseFloat(prompt("Digite seu salário atual: "))
let percentual = parseFloat(prompt("DIgite o percentual que vai ser acrecido no salário: "))

salario_novo = salario_atual + (salario_atual * (percentual / 100))

alert(salario_novo)