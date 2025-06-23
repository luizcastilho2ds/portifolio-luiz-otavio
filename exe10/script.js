function contar() {
    let mostraresultado = document.getElementById(`resultado`);

    mostraresultado.innerHTML = `<p><b> Contando de 1 até 10</p></b>`

    let contador = 1;

    while (contador <= 10 ){
        let numero = contador % 2;
        
        if (numero == 0) {
            mostraresultado.innerHTML += `<mark>${contador}<mark/> &#10037;`;
        } else {
            mostraresultado.innerHTML += `${contador}&#10037;`;
        }
        contador+=1;
    }
    
}