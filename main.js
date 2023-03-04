const tamanhoParaLavagem = document.querySelectorAll("[data-item-lavagem]");
const quantidadePoltronaLavagem = document.querySelector("[data-item-lavagem3]");
const adicionar = document.querySelectorAll(".adicionar");
const higProfunda = document.querySelector(".hig-profunda");
const higProfunda2 = document.querySelector(".hig-profunda2");
const higProfunda3 = document.querySelector(".hig-profunda3");
const higProfunda4 = document.querySelector(".hig-profunda4");
const higProfunda5 = document.querySelector(".hig-profunda5");
const higProfunda6 = document.querySelector(".hig-profunda6");
const higProfunda7 = document.querySelector(".hig-profunda7")
const higProfunda8 = document.querySelector(".hig-profunda8");
const sofaLavagem = document.querySelector("#lavacao");
const camaLavagem = document.querySelector("#lavacao2");
const tapeteLavagem = document.querySelector("#lavacao3");
const carpeteLavagem = document.querySelector("#lavacao4");
const carrinhoLavagem = document.querySelector("#lavacao5");
const poltronaLavagem = document.querySelector("#lavacao6");
const bercoLavagem = document.querySelector("#lavacao7")
const preco = document.querySelector("[data-valor]");
const formItem = document.querySelectorAll(".form-item");
let precoDoItem = 0;
let unitarioPoltrona = 80;
let valorLavagem1 = 90;
let valorLavagemSofa2Lugares = 175;
let valorLavagemSofa3Lugares = 200;
let valorLavagemSofa4Lugares = 225;
let valorLavagemSofa5Lugares = 250;
let valorLavagem6 = 275;
const caract = document.querySelectorAll("[data-sofa-caract]")
let acrescimoCaract = 0;
let custoMetroQuadrado = 30;

caract.forEach((elemento)=>{
    elemento.addEventListener("change", (evento)=>{
        acrescimoCaract = 0;
        acrescimoCaract = 25;
    })
})

tamanhoParaLavagem.forEach((elemento)=>{
    elemento.addEventListener("change", (evento)=>{
        precoDoItem = 0;
        calculaPrecoDoItem(evento.target.value);
        return precoDoItem;
    })
})

quantidadePoltronaLavagem.addEventListener("change", ()=>{
    precoDoItem = 0;
    precoDoItem = quantidadePoltronaLavagem.value * unitarioPoltrona;
})

function calculaPrecoDoItem(tamanho){
    if(tamanho == 1){
        precoDoItem = precoDoItem + valorLavagemSofa2Lugares
    } else if (tamanho == 1.1){
        precoDoItem = precoDoItem + valorLavagem1
    } else if (tamanho == 1.5){
        precoDoItem = precoDoItem + valorLavagemSofa3Lugares
    } else if (tamanho == 2){
        precoDoItem = precoDoItem + valorLavagemSofa4Lugares
    } else if (tamanho == 2.5) {
        precoDoItem = precoDoItem + valorLavagemSofa5Lugares
    } else if (tamanho == 2.75){
        precoDoItem = precoDoItem + valorLavagem6
    }
}


// calculo tapete
let compTapete = document.querySelector("#comprimento-tapete");
let largTapete = document.querySelector("#largura-tapete");
let metragem = document.querySelector("#area-tapete");
/*let itensTapete = 0;
const botaoTapete = document.querySelector("[data-add-tapete]");*/

function calculaAreaDoTapete (){
    metragem.value = compTapete.value * largTapete.value;
    montaPacoteHigProfunda(metragem.value/4);
    precoDoItem = metragem.value * custoMetroQuadrado;
}

largTapete.addEventListener("change", (evento)=>{
    calculaAreaDoTapete();
})

compTapete.addEventListener("change", (evento)=>{
    calculaAreaDoTapete();
})
/*
botaoTapete.addEventListener("click", (evento)=>{
    calculaQuantidadeItensDoTapete();
})

function calculaQuantidadeItensDoTapete (){
    itensTapete = metragem.value / 4;
    if (itensTapete < 1 && itensTapete > 0){
        pacoteAtual = 1;
    } else {
        pacoteAtual = parseInt(itensTapete);
    }
    return pacoteAtual
}*/

//fim calculo tapete

//calculo carpete
const areaCarpete = document.querySelector("#area-carpete");
/*let itensCarpete = 0;

function calculaQuantidadeItensDoCarpete (){
    itensCarpete = (areaCarpete.value / 4);
    console.log(itensCarpete);
    if (itensCarpete < 1){
        pacoteAtual = 1;
    } else {
        pacoteAtual = parseInt(itensCarpete);
    }
    return pacoteAtual
}
//fim calculo carpete

function verificarTCL(){
    if (higProfunda3.checked){
        calculaQuantidadeItensDoTapete();
    } else if (higProfunda4.checked){
        calculaQuantidadeItensDoCarpete();
    }else if (higProfunda9.checked){
        calculaItensLivros();
    }
    return pacoteAtual;
}*/

//calculo livros

const largLivros = document.querySelector("#larguraLivros");
const compLivros = document.querySelector("#comprimentoLivros");
const areaLivros = document.querySelector(".areaLivros");
const higProfunda9 = document.querySelector(".hig-profunda9");

function calculaAreaEstante () {
    areaLivros.value = largLivros.value * compLivros.value;
    montaPacoteHigProfunda(areaLivros.value/2);
}

largLivros.addEventListener("change", (evento)=>{
    calculaAreaEstante();
})

compLivros.addEventListener("change", (evento)=>{
    calculaAreaEstante();
})



let verifica = false;

adicionar.forEach((elemento)=>{
elemento.addEventListener("click", evento=>{
    if(sofaLavagem.checked || camaLavagem.checked || tapeteLavagem.checked || carpeteLavagem.checked || carrinhoLavagem.checked || poltronaLavagem.checked || bercoLavagem.checked){
        preco.value = parseInt(preco.value) + precoDoItem + acrescimoCaract;
        formItem.forEach((elemento)=>{elemento.reset();})
        
    } else if (higProfunda.checked || higProfunda2.checked || higProfunda3.checked || higProfunda4.checked || higProfunda5.checked || higProfunda6.checked || higProfunda7.checked || higProfunda8.checked){
        pacoteFinal += pacoteAtual;
        console.log(pacoteFinal)
        if(pacoteFinal > 5){
        verificaPacote();
        preco.value = parseInt(preco.value) + precoDoPacote;
        formItem.forEach((elemento)=>{elemento.reset();})
        } else if (pacoteFinal <=5 && !verifica && pacoteFinal>0){
            precoDoPacote = pacote5itens;
            preco.value = parseInt(preco.value) + precoDoPacote;
            verifica = true;
            formItem.forEach((elemento)=>{elemento.reset();})
        } else {
            preco.value = parseInt(preco.value) + 0;
            formItem.forEach((elemento)=>{elemento.reset();})
        }
    } 
    
    else {
        alert(`Você deve informar um serviço para o item adicionado`)
    }
})
})