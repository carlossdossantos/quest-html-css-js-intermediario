const botaoEnviar = document.querySelector(".botao-enviar");

botaoEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    const campos = document.querySelectorAll(".campo");
    const mensagensInvalido = document.querySelectorAll(".invalido");

    campos.forEach(function (campo, indice) {
        if (campo.value.trim() === '') {
            // Campo inválido (vazio)
           mensagensInvalido[indice].classList.add("mostrar")
           campo.classList.add("semmargem")
           campo.style.border = "2px solid #F52E2E" 
        } else {
            // Campo válido (não vazio)
            if(mensagensInvalido[indice])
            {
                mensagensInvalido[indice].classList.remove("mostrar")
            }
            campo.classList.remove("semmargem");
            campo.style.border = "2px solid #0CC22B"
        }
    });
});
    



