var titulo = document.querySelector(".titulo");
var botaoAdicionar = document.querySelector("#adicionar-paciente");
var paciente = document.querySelectorAll('.paciente');

titulo.textContent = 'Aparecida Nutricionista';

for (var lintCont = 0; lintCont < paciente.length; lintCont++) {
    var tdPeso = paciente[lintCont].querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente[lintCont].querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc =  paciente[lintCont].querySelector(".info-imc");
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {    
    if (altura > 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}