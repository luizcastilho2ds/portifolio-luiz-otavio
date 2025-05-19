//esta é uma calculadora simples
let n1;
let n2;
let res;
let numero;

function sobra() {
    n1 = Number(window.prompt("Digite o primeiro número:"));
    n2 = Number(window.prompt("Digite o segundo número:"));
    res = n1 % n2;
    numero = res % 2;
    alert ("o resultado é " + res + ".");
    if (numero == 0) {
        alert ("Par");
    } else {
        alert ("impar");
    }
    alert("o resultado é " + res + ".");
    //essa é a função que divide 2 numeros e mostra a sobra
}
function multiplicacao(){
    n1 = Number(window.prompt("Digite o primeiro número:"));
    n2 = Number(window.prompt("Digite o segundo número:"));
    res = n1 * n2;
    numero = res % 2;
    alert ("o resultado é " + res + ".");
    if (numero == 0) {
        alert ("Par");
    } else {
        alert ("impar");
    }
    //essa é a função de multipicar 2 numerose mostra o resultado
}

function soma(){
    n1 = Number(window.prompt("Digite o primeiro número:"));
    n2 = Number(window.prompt("Digite o segundo número:"));
    res = n1 + n2;
    numero = res % 2;
    alert ("o resultado é " + res + ".");
    if (numero == 0) {
        alert ("Par");
    } else {
        alert ("impar");
    }
    //essa é a função de somar 2 numeros o resultado
}

function subtracao(){
    n1 = Number(window.prompt("Digite o primeiro número:"));
    n2 = Number(window.prompt("Digite o segundo número:"));
    res = n1 - n2;
    numero = res % 2;
    alert ("o resultado é " + res + ".");
    if (numero == 0) {
        alert ("Par");
    } else {
        alert ("impar");
    }
    
    //essa é a função de subtrair 2 numeros o resultado
}

function divisao(){
    n1 = Number(window.prompt("Digite o primeiro número:"));
    n2 = Number(window.prompt("Digite o segundo número:"));
    res = n1 / n2;
    numero = res % 2;
    alert ("o resultado é " + res +".")
    if (numero == 0) {
        alert ("Par");
    } else {
        alert ("impar")
    }
    //essa é a função de dividir 2 numeros o resultado
}



