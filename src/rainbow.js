const form = document.querySelectorAll("[data-form]");
const opcoes = document.querySelectorAll("[data-item]");
const itemAreaDoPacote2 = document.querySelectorAll("[data-item-area2]"); //para a estante de livros
itensEscolhidos = [];
let itemAtual = {};
let pacoteAtual = 0;
let pacote5itens = 200;
let sextoItem = 40;
let pacote7itens = 250;
let oitavoNonoItens = 30;
let pacote10itens = 300;
let dezAoQuinze = 27.5;
let pacote15itens = 400;
let pacoteFinal = 0;
let precoDoPacote = 0;
const preco = document.querySelector("[data-valor]");
let eventoArea = new Event ('change');

opcoes.forEach((elemento) => {
    elemento.addEventListener("change", (evento) => {
        const objeto = evento.target.dataset.item
        const quantidade = evento.target
        if(objeto === "Tapete" || objeto === "Carpete"){
        montaPacoteHigProfunda(quantidade.value/4);
        itemAtual = {
            "Objeto": objeto,
            "Valor para o pacote": quantidade.value + "m²"
        }
    } else if (objeto === "Estante de Livros"){
        montaPacoteHigProfunda(quantidade.value/2);
        itemAtual = {
            "Objeto": objeto,
            "Valor para o pacote": quantidade.value + "m²"
        }
    } else {
        montaPacoteHigProfunda(quantidade.value)
        itemAtual = {
            "Objeto": objeto,
            "Valor para o pacote": quantidade.value
        }
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
largTapete.addEventListener("change", (evento)=>{
    calculaAreaDoTapete();
})
compTapete.addEventListener("change", (evento)=>{
    calculaAreaDoTapete();
})
// fim tapete
// Calculo estante de Livros
const largLivros = document.querySelector("#larguraLivros");
const compLivros = document.querySelector("#comprimentoLivros");
const areaLivros = document.querySelector(".areaLivros");

function calculaAreaEstante () {
    areaLivros.value = largLivros.value * compLivros.value;
    areaLivros.dispatchEvent(eventoArea);
}

largLivros.addEventListener("change", (evento)=>{
    calculaAreaEstante();
})

compLivros.addEventListener("change", (evento)=>{
    calculaAreaEstante();
})
//FIM LIVROS

function montaPacoteHigProfunda(tamanho){
    pacoteAtual = parseInt(tamanho);
    return pacoteAtual;
}

itemAreaDoPacote2.forEach((elemento)=>{
    elemento.addEventListener("change", (evento)=>{
        montaPacoteHigProfunda(evento.target.value / 2)
    })
})


function verificaPacote (){
    if (pacoteFinal == 6){
        preco.value -= precoDoPacote;
        precoDoPacote = pacote5itens + sextoItem;
    } else if (pacoteFinal == 7){
        preco.value = parseInt(preco.value) - precoDoPacote;
        precoDoPacote = pacote7itens;
    } else if (pacoteFinal == 8){
        preco.value = parseInt(preco.value) - precoDoPacote;
        precoDoPacote = pacote7itens + oitavoNonoItens;
    } else if (pacoteFinal == 9) {
        preco.value = parseInt(preco.value) - precoDoPacote;
        precoDoPacote = pacote7itens + (2* oitavoNonoItens);
    } else if (pacoteFinal == 10){
        preco.value = parseInt(preco.value) - precoDoPacote
        precoDoPacote = pacote10itens;
    } else if (pacoteFinal > 10 && pacoteFinal < 15){
        preco.value = parseInt(preco.value) - precoDoPacote
        precoDoPacote = pacote10itens + ((pacoteFinal - 10)*dezAoQuinze);
    } else if (pacoteFinal == 15){
        preco.value = parseInt(preco.value) - precoDoPacote
        precoDoPacote = pacote15itens;
    } else if (pacoteFinal > 15){
        preco.value = parseInt(preco.value) - precoDoPacote
        precoDoPacote = pacote15itens +((pacoteFinal - 15)*27);
    } else {
        precoDoPacote = 0;
    }
    return precoDoPacote
}

let verifica = false;


form.forEach((elemento)=>{
elemento.addEventListener("submit", (evento) => {
    evento.preventDefault();

    itensEscolhidos.push(itemAtual);

    localStorage.setItem("itensEscolhidos", JSON.stringify(itensEscolhidos));
    pacoteFinal += pacoteAtual;
    console.log(pacoteFinal)
    if(pacoteFinal > 5){
    verificaPacote();
    preco.value = parseInt(preco.value) + precoDoPacote;
    } else if (pacoteFinal <=5 && !verifica && pacoteFinal>0){
        precoDoPacote = pacote5itens;
        preco.value = parseInt(preco.value) + precoDoPacote;
        verifica = true;
    } else {
        preco.value = parseInt(preco.value) + 0;
    }

    form.forEach(element => {
        element.reset();
    });
})
})

