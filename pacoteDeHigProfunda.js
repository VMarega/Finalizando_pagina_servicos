const itemDoPacote = document.querySelectorAll("[data-item-pacote]")//itens com value pré-definidos
const itemAreaDoPacote = document.querySelectorAll("[data-item-area]"); //tapete e carpete
const itemAreaDoPacote2 = document.querySelectorAll("[data-item-area2]"); //para a estante de livros
let pacoteAtual=0;
let pacote5itens = 200;
let sextoItem = 40;
let pacote7itens = 250;
let oitavoNonoItens = 30;
let pacote10itens = 300;
let dezAoQuinze = 27.5;
let pacote15itens = 400;
let pacoteFinal = 0;
let precoDoPacote = 0;


itemAreaDoPacote2.forEach((elemento)=>{
    elemento.addEventListener("change", (evento)=>{
        montaPacoteHigProfunda(evento.target.value / 2)
        return pacoteAtual;
    })
})

itemAreaDoPacote.forEach((elemento)=>{
    elemento.addEventListener("change", (evento)=>{
        montaPacoteHigProfunda(evento.target.value / 4)
        precoDoItem = evento.target.value * 30;
        return pacoteAtual;
    })
})

itemDoPacote.forEach((elemento)=>{
    elemento.addEventListener("change" , (evento)=>{
        montaPacoteHigProfunda(evento.target.value);
        return pacoteAtual;
    })
})

function montaPacoteHigProfunda(tamanho){
    pacoteAtual = parseInt(tamanho);
    return pacoteAtual;
}

function verificaPacote (){
    console.log(precoDoPacote);
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