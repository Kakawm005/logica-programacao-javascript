//10) O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
//distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
//seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
//calcular e escrever o custo final ao consumidor.

custo_fabrica_carro = parseFloat(prompt("Digite o valor de fabrica do carro: "))
percentual_distribuidor = 28 / 100
impostos = 45 / 100

custo_total_carro = custo_fabrica_carro + (custo_fabrica_carro * percentual_distribuidor) + (custo_fabrica_carro * impostos)

alert(custo_total_carro)