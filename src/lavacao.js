const form = document.querySelectorAll("[data-form]");
const opcoes = document.querySelectorAll("[data-item]");
let itensLavar = [];
const preco = document.querySelector("[data-valor]");
let valorDoItem = 0;


opcoes.forEach((elemento)=>{
    elemento.addEventListener("change", (evento) => {
        let objeto = evento.target.dataset.item
        let preço = evento.target
        itemAtual = {
            "Objeto": objeto,
            "Preço": preço.value
        }
        valorDoItem = parseInt(preço.value)
    })
})


form.forEach((elemento)=>{
    elemento.addEventListener("submit", (evento)=>{
        evento.preventDefault();

        itensLavar.push(itemAtual);

        localStorage.setItem("itensLavar", JSON.stringify(itensLavar));

        preco.value = parseInt(preco.value) + valorDoItem;

        form.forEach( element => element.reset());
    })
})