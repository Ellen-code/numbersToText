
function start () {
    var inputEscolher = document.querySelector("#inputEscolher");
    var inputMostrar = document.querySelector("#inputMostrar");
    var inputEscrever = document.querySelector("#inputEscrever")

    function escolher(event) {
        var valorAtual = event.target.value;
        inputMostrar.value = valorAtual;

        inputEscrever.value = numeroExtenso(valorAtual);
    }

    inputEscolher.addEventListener("input", escolher);
}

function numeroExtenso(numero) {
    var tamanho = numero.toString().length;

    if (tamanho === 1) {
        return tamanhoUmDescricao(numero);   
    }
    if (tamanho === 2) {
        return tamanhoDoisDescricao(numero);
    }

    if (tamanho === 3) {
        return tamanhoTresDescricao(numero);
    }

    return tamanho;
}

function tamanhoUmDescricao(numero) {
    if (numero === "0") return "zero";
    if (numero === "1") return "um";
    if (numero === "2") return "dois";
    if (numero === "3") return "três";
    if (numero === "4") return "quatro";
    if (numero === "5") return "cinco";
    if (numero === "6") return "seis";
    if (numero === "7") return "sete";
    if (numero === "8") return "oito";
    if (numero === "9") return "nove";
}

function tamanhoDoisDescricao(numero) {
    if (numero === "10") return "dez";
    if (numero === "11") return "onze";
    if (numero === "12") return "doze";
    if (numero === "13") return "treze";
    if (numero === "14") return "quatorze";
    if (numero === "15") return "quinze";
    if (numero === "16") return "dezesseis";
    if (numero === "17") return "dezessete";
    if (numero === "18") return "dezoito";
    if (numero === "19") return "dezenove";
    if (numero === "20") return "vinte";
    if (numero === "30") return "trinta";
    if (numero === "40") return "quarenta";
    if (numero === "50") return "cinquenta";
    if (numero === "60") return "sessenta";
    if (numero === "70") return "setenta";
    if (numero === "80") return "oitenta";
    if (numero === "90") return "noventa";

    var primeiro = numero[0];
    var segundo = numero[1];
    var prefixo = "";

    if (primeiro === "2") prefixo = "vinte e ";
    if (primeiro === "3") prefixo = "trinta e ";
    if (primeiro === "4") prefixo = "quarenta e ";
    if (primeiro === "5") prefixo = "cinquenta e ";
    if (primeiro === "6") prefixo = "sessenta e ";
    if (primeiro === "7") prefixo = "setenta e ";
    if (primeiro === "8") prefixo = "oitenta e ";
    if (primeiro === "9") prefixo = "noventa e ";

    return prefixo + tamanhoUmDescricao(segundo);
}

function tamanhoTresDescricao(numero) {
    if (numero === "100") return "cem";
    if (numero === "200") return "duzentos";
    if (numero === "300") return "trezentos";
    if (numero === "400") return "quatrocentos";
    if (numero === "500") return "quinhentos";
    if (numero === "600") return "seiscentos";
    if (numero === "700") return "setecentos";
    if (numero === "800") return "oitocentos";
    if (numero === "900") return "novecentos";

    var primeiro = numero[0];
    var prefixo = "";

    if (primeiro === "1") prefixo = "cento e ";
    if (primeiro === "2") prefixo = "duzentos e ";
    if (primeiro === "3") prefixo = "trezentos e ";
    if (primeiro === "4") prefixo = "quatrocentos e ";
    if (primeiro === "5") prefixo = "quinhentos e ";
    if (primeiro === "6") prefixo = "seiscentos e ";
    if (primeiro === "7") prefixo = "setecentos e ";
    if (primeiro === "8") prefixo = "oitocentos e ";
    if (primeiro === "9") prefixo = "novecentos e ";

    var segundo = numero[1];
    var terceiro = numero[2];
    var resto = numero.substring(1);

    if (segundo === "0") {
        return prefixo + tamanhoUmDescricao(terceiro);
    }
        return prefixo + tamanhoDoisDescricao(resto);
}

start();
