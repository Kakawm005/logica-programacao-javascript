//11) Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
//mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
//efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
//vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
//vendedor. 

let numero_carros_vendidos = parseInt(prompt("Digite o total de carros vendidos: "))
let valor_total_vendas = parseFloat(prompt("Digite o valor total das vendas: "))
let salario_fixo = parseFloat(prompt("Digite o seu salário fixo: "))
let valor_recebido_carro_vendido = parseFloat(prompt("Digite o valor recebido por carro vendido: "))

let salario_final = salario_fixo + (numero_carros_vendidos * valor_recebido_carro_vendido) + (valor_total_vendas * 0.05)

alert(salario_final)