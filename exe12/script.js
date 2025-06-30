let mostraresultado = document.getElementById(`resultado`);
function calcular(){

let n1 = Number(window.prompt('digite um número para calcular a tabuada:'));
let contador = 1;

mostraresultado.innerHTML = `<p><b>TABUADA</p></b>`;
while (contador <= 10){
    mostraresultado.innerHTML += `${n1}  X  ${contador}  =  ${n1*contador}<br>`;
    contador++;
}
}