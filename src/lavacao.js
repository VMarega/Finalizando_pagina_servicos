const form = document.querySelectorAll("[data-form]");
const opcoes = document.querySelectorAll("[data-item]");
let itensLavar = [];
let itemAtual ={};
const preco = document.querySelector("[data-valor]");
let valorDoItem = 0;
const valorLavagemM2Tapete = 30;
const valorLavagemCarrinhoBebeEBerço = 90;
const valorLavagemPoltrona = 80;
let eventoArea = new Event ('change');

opcoes.forEach((elemento)=>{
    elemento.addEventListener("change", (evento) => {
        let objeto = evento.target.dataset.item
        let preço = evento.target
        itemAtual = {
            "Objeto": objeto,
            "Preço": preço.value
        }
        if(objeto === "Tapete" || objeto === "Carpete"){
            valorDoItem = parseInt(preço.value) * valorLavagemM2Tapete;
        } else if(objeto === "Carrinho de Bebê" || objeto === "Berço"){
            valorDoItem = parseInt(preço.value) * valorLavagemCarrinhoBebeEBerço;
        } else if(objeto === "Poltrona"){
            valorDoItem = parseInt(preço.value) * valorLavagemPoltrona;
        } else {
        valorDoItem = parseInt(preço.value)
        }
    })
})


// cálculo da área do tapete e carpete automático
let compTapete = document.querySelector("#comprimento-tapete");
let largTapete = document.querySelector("#largura-tapete");
let metragem = document.querySelector("#area-tapete");
function calculaAreaDoTapete (){
    metragem.value = compTapete.value * largTapete.value;
    metragem.dispatchEvent(eventoArea);
}
largTapete.addEventListener("change", ()=>{
    calculaAreaDoTapete();
})
compTapete.addEventListener("change", ()=>{
    calculaAreaDoTapete();
})
// fim tapete

form.forEach((elemento)=>{
    elemento.addEventListener("submit", (evento)=>{
        evento.preventDefault();
        console.log("entrou tb")
        itensLavar.push(itemAtual);

        localStorage.setItem("itensLavar", JSON.stringify(itensLavar));

        preco.value = parseInt(preco.value) + valorDoItem;

        form.forEach( element => element.reset());
    })
})