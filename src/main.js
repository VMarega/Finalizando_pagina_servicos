const form = document.getElementById("form-item");
const opcoes = document.querySelectorAll("[data-item]")

opcoes.forEach((elemento) => {
    elemento.addEventListener("change", (evento) => {
        //calculaPrecoLavagem(evento.target.value)
    })
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    form.reset();
})


function calculaPrecoLavagem(tamanho) {
    if (tamanho == 1) {
        precoDoItem = precoDoItem + valorLavagemSofa2Lugares
    } else if (tamanho == 1.1) {
        precoDoItem = precoDoItem + valorLavagem1
    } else if (tamanho == 1.5) {
        precoDoItem = precoDoItem + valorLavagemSofa3Lugares
    } else if (tamanho == 2) {
        precoDoItem = precoDoItem + valorLavagemSofa4Lugares
    } else if (tamanho == 2.5) {
        precoDoItem = precoDoItem + valorLavagemSofa5Lugares
    } else if (tamanho == 2.75) {
        precoDoItem = precoDoItem + valorLavagem6
    }
} 