let aleatorio = parseInt(Math.random() * 101)
let mostraresultado = document.querySelector('#resultado');
let jogador;

function pensar() {
    jogador = Number(window.prompt("Digite um número entre 1 a 100"))
    
    
       if (jogador != aleatorio) {
        if(jogador > aleatorio) {
                mostraresultado.innerHTML = `<p>Você errou, tente um NUMERO MENOR`;
        } else {
                mostraresultado.innerHTML = `<p>Voce errou, tente um NUMERO MAIOR`;
        }
       } else {
        mostraresultado.innerHTML = `<p>Parabéns você acertou ${aleatorio}`;
       }
}