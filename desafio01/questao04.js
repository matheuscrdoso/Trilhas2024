// 4. Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. Ele pede sua ajuda para identificar esses números criando um algoritmos. Os números são: 23, 16, 11, 8, 19, 14, 5, 21.

var vet=[23,16,11,8,19,14,5,21];
var primos = [];

for(var i=0; i< vet.length; i++){
    if(vet[i]== 2){
        primos.push(vet[i])
    }
    if(vet[i]%2!=0){
        primos.push(vet[i])
    }
}

alert(primos)