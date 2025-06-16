let est;
let  mostraresultado = document.querySelector('#resultado');

function mes() {
    est = window.prompt("digite o mês").toUpperCase()

    if(est == "JANEIRO" || est == "FEVEREIRO" ||  est == "DEZEMBRO"){
        mostraresultado.innerHTML = `<p>Estação:Verão </p>`;
        document.body.style.backgroundColor = "firebrick";
    }
    if(est == "MARÇO" || est == "ABRIL" ||  est == "MAiO"){
        mostraresultado.innerHTML = `<p>Estação:Outono </p>`;
        document.body.style.backgroundColor = "darkgoldenrod";

    }
    if(est == "JUNHO" || est == "JULHO" ||  est == "AGOSTO"){
        mostraresultado.innerHTML = `<p>Estação:Inverno </p>`;
        document.body.style.backgroundColor = "lightblue";
    }
    if(est == "SETEMBRO" || est == "OUTUBRO" ||  est == "NOVEMBRO"){
        mostraresultado.innerHTML = `<p>Estação:Primavera </p>`;
        document.body.style.backgroundColor = "darkmagenta";
    }
}