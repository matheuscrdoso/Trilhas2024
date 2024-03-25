// 6. Escreva um programa para encontrar o fatorial do número 12.

var numero = 12;
var resultado = 1;

function fatorial(num) {
    for (var i = 1; i <= num; i++) {
        resultado *= i;
        console.log(resultado)
    }
}

fatorial(numero);
alert("O fatorial de " + numero + " é: " + resultado);