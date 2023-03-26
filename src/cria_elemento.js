const lista = document.getElementById("lista");

function ciraElemento (item){
    let novoItem = document.createElement('div');
    let itemSelecinado = document.createElement('li');
    novoItem.classList.add("bg-light");
    novoItem.appendChild(itemSelecinado);
    itemSelecinado.classList.add("nav-link");
    itemSelecinado.classList.add("d-flex");
    itemSelecinado.classList.add("flex-wrap");
    itemSelecinado.classList.add("flex-row");
    itemSelecinado.innerHTML += item
    lista.appendChild(novoItem);
}
