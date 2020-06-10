var buscar = document.querySelector("#buscar");




function chamar() {
    var matricula = document.querySelector("#matricula").value;
    var enderecoImagem = "<img src='imagem/"+matricula+".png'>";
    var resultado = document.querySelector("#resultado");
    resultado.innerHTML = enderecoImagem;

};

buscar.addEventListener("click", chamar);








