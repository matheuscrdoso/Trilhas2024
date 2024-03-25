// 8. Em um sistema de biblioteca, é necessário calcular a multa a ser paga por um usuário que atrasou a devolução de um livro. A multa é de R$ 0,50 por dia de atraso. O usuário atrasou a devolução do livro em 7 dias. Crie um algoritmo que faça o cálculo total que o aluno deverá pagar a biblioteca.

function calcMulta(numDias){
    return numDias * 0.50
}

var dias = 7;
var precoPagar = 0

precoPagar = calcMulta(dias)

alert("Preço a pagar por atrasar 7 dias é de R$ "+precoPagar.toFixed(2));