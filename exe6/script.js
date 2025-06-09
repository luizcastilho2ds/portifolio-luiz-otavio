    let inscritos = 0;
    let mostraresultado = document.querySelector('#resultado');
    let times = 0;

    function inscrever() {
        inscritos += 1;
         times = parseInt (inscritos / 3);

        mostraresultado.innerHTML = `<p>TIMES ${times}Número de inscritos:${inscritos}</p>`;

       if (times >= 4) {
        alert ("Já é possivel acontecer o campeonato")
       }
            
        
            
    }