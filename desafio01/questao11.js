// 11. Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.

function calcularIdade(dataNascimento) {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var mesAtual = dataAtual.getMonth() + 1;
    var diaAtual = dataAtual.getDate();

    var partesData = dataNascimento.split("-");
    var anoNascimento = parseInt(partesData[0]);
    var mesNascimento = parseInt(partesData[1]);
    var diaNascimento = parseInt(partesData[2]);

    var idade = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    return idade;
}

var dataNascimento = "2003-02-02";
var idade = calcularIdade(dataNascimento);
console.log("A idade é: " + idade);
