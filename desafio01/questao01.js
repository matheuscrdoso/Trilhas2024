// 1. Imagine que você está criando um sistema escolar para obter a média dos alunos da sala. Foram realizadas 3 avaliações com nota máxima de 10 pontos. Aline, tirou na primeira nota o total de 8 pontos, na segunda nota tirou 9 pontos e na terceira nota 7 pontos. 

// Escreva um programa que receba as notas, faça o cálculo da média e imprima o resultado final da média.

var media=0;
var vet = [];

for (var i=0; i<3; i++){
    var nota = Number(prompt(`Escreva a ${i+1}ª nota: `));
    while(nota > 10){
        var nota = Number(prompt(`Por Favor escreva um valor menor ou igual a 10\nEscreva a ${i+1}ª nota: `));
    };
    vet.push(nota);
}

for (var i=0; i<vet.length; i++){
    media += vet[i]
}

alert("A sua média é: "+ media/3);