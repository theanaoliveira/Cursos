var titulo = document.querySelector(".titulo");
titulo.textContent = 'Aparecida Nutricionista';

var paciente = document.querySelectorAll('.paciente');

for (var lintCont = 0; lintCont < paciente.length; lintCont++) {
    var tdPeso = paciente[lintCont].querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente[lintCont].querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //var imc = peso / (altura * altura);
    var tdImc =  paciente[lintCont].querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente[lintCont].classList.add('paciente-invalido')
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente[lintCont].classList.add('paciente-invalido')
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}