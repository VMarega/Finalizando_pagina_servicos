let carrinhoHigProfunda = JSON.parse(localStorage.getItem("carrinhoHigProfunda")) || [];
let itensCarrinho = document.querySelector("[data-itens-carrinho]");
let divCarrinho = '<div class="d-none">' + '<li class="list-group-item d-flex justify-content-between lh-sm">' + '<div>' + '<h6 class="my-0"></h6>' + '<small class="text-muted"></small>' + '<span class="text-muted"></span>' + '</div>' + '</li>' +' </div>';


function addItensHigCarringho(){
    let itemAtual = [

    ]
        if(pacoteFinal > 0){
            if(pacoteFinal <= 5 && pacoteFinal > 0){
                itemAtual.produto.push("Pacote de 5 itens");
                itemAtual.preço.push("R$200,00");
            } if (pacoteFinal = 6){
                itemAtual.produto.push("Pacote de 5 itens");
                itemAtual.preço.push("R$200,00");
                itemAtual.produto.push("6º item");
                itemAtual.preço.push("R$40,00");
            }
        }

    localStorage.setItem("carrinhoHigProfunda", JSON.stringify(carrinhoHigProfunda));
}