const botaomostrapalavras = document.querySelector("#botao-palavrachave");
botaomostrapalavras.addEventListener("click", mostrapalavrachave);

function mostrapalavrachave(){

    const texto = document.querySelector("#entrada-de texto").value;
    const compoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = texto.split("");
    
    compoResultado.textContent = palavras.join(",");
}