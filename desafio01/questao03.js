// 3. Havia uma antiga guilda de alquimistas que guardava seus segredos em uma série de frascos numerados. No entanto, ao longo dos anos, os frascos foram sendo desorganizados e agora os aprendizes alquimistas precisam restaurar a ordem. Os números dos frascos representam a idade dos alquimistas que os criaram. Eles devem ser ordenados em ordem crescente para revelar um segredo alquímico há muito perdido. Mas, para isso, os aprendizes devem usar suas habilidades em algoritmos de ordenação. 

function organizacao(a,b){
    return a - b;
}

vet = [12, 5, 23, 17, 8, 14, 3, 19]

alert("Os números organizados são: "+ vet.sort(organizacao))