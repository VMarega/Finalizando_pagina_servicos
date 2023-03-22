const form = document.querySelector("[data-form]");
const opcoes = document.querySelectorAll("[data-item]")
itensEscolhidos = [];
let itemAtual = [];

opcoes.forEach((elemento) => {
    elemento.addEventListener("change", (evento) => {
        const objeto = evento.target.dataset.item
        const quantidade = evento.target
        itemAtual = {
            "Objeto": objeto,
            "Valor para o pacote": quantidade.value
        }
    })
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    itensEscolhidos.push(itemAtual);

    localStorage.setItem("itensEscolhidos", JSON.stringify(itensEscolhidos));

    

    form.reset();
})
