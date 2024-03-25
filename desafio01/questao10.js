// 10. Desenvolver um programa para contar o número de letras maiúsculas da string abaixo: “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY”

var string = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
var count = 0;

for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);
    if (char >= 'A' && char <= 'Z') {
        count++;
    }
}

alert("O número de letras maiúsculas na string é: " + count);