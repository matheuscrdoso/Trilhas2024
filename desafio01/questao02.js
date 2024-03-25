// 2. Tais está participando de um sorteio na Loteria e recebeu uma lista de números aleatórios para poder apostar. Os números foram: 15, 8, 90, 75, 102, 6 e 2. Por ser bastante cautelosa, ela gostaria de saber qual é o menor número e qual é o maior número. 

// Ajude Tais e escreva um programa que faça a lógica de programação para organização dos números, receba os números da lista e imprima na tela o menor número digitado e o maior número digitado.

function organizacao(a, b){
    return (a - b)
  }
  vet = [15, 8, 90, 75, 102, 6, 2];
  vet.sort(organizacao);

alert("O menor valor dos números é: " + vet[0])
alert("O maior valor dos números é: " + vet[vet.length-1])