const botaomostrapalavras = document.querySelector("#botao-palavrachave");
botaomostrapalavras.addEventListener("click", mostrapalavrachave);

function mostrapalavrachave(){

    const texto = document.querySelector("#entrada-de texto").value;
    const compoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = texto.split("");
    
    compoResultado.textContent = palavras.join(",");

}
function processatexto(texto){
    let palavras = texto.split (/\P {l})+/u);
    const frequencias = contafrequencia(palavras);
    let ordenadas = Object.keys(fequencias).sort(ordenapalavra);

    function ordenapalavra(p1,p2){
        return fequencias[p2]-frequencias[p1];
    }

    console.log(ordenadas);
    return ordenadas.slice(0,10);

}
function contafrequencia(palavras){
    let frequencias ={}; 
    for( let i of palavras){
        frequencias[i]=0;
        for (let j of palavras){
            if (i==j){
                frequencias[i]++;
                
            }
        }
    }
}


    return palavras;
}
