const form = document.querySelectorAll("[data-form]");
const opcoes = document.querySelectorAll("[data-item]");
let itensSelecionados = [];


opcoes.forEach((elemento)=>{
    elemento.addEventListener("change", (evento) => {
        let objeto = evento.target.dataset.item
        let preço = evento.target
        itemAtual = {
            "Objeto": objeto,
            "Preço": preço.value
        }
        console.log(itemAtual)
    })
})


form.forEach((elemento)=>{
    elemento.addEventListener("submit", (evento)=>{
        evento.preventDefault();


    })
})