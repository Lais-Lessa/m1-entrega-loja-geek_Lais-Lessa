let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
];

let listFigures = [];
let listFrames = [];
const capturaListaDeQuadros = document.querySelector("#quadros")
const capturaListaDeFiguras = document.querySelector("#figuras")

function separateItens(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].type == "Painting") {
            listFrames.push(array[i])
        } else if (array[i].type == "Action Figures") {
            listFigures.push(array[i])
        }
    }
}
separateItens(itens)

for (let i = 0; i < listFigures.length; i++) {

    let elementoLiFiguras = document.createElement("li");
    elementoLiFiguras.classList.add("cards");
    let imagemFiguras = document.createElement("img");
    imagemFiguras.classList.add("image_cards");
    let nomeH3Figuras = document.createElement("h3");
    let paragrafoPrecoFiguras = document.createElement("p");

    imagemFiguras.setAttribute("src", listFigures[i].image);
    nomeH3Figuras.innerText = `${listFigures[i].name}`;
    paragrafoPrecoFiguras.innerText = `${listFigures[i].price}`;

    elementoLiFiguras.appendChild(imagemFiguras);
    elementoLiFiguras.appendChild(nomeH3Figuras);
    elementoLiFiguras.appendChild(paragrafoPrecoFiguras);

    capturaListaDeFiguras.appendChild(elementoLiFiguras);
}

for (let i = 0; listFrames.length; i++) {

    let elementoLiQuadros = document.createElement("li");
    elementoLiQuadros.classList.add("cards");
    let imagemQuadros = document.createElement("img");
    imagemQuadros.classList.add("image_cards");
    let nomeH3Quadros = document.createElement("h3");
    nomeH3Quadros.classList.add("titulo_h3");
    let paragrafoPrecoQuadros = document.createElement("p");
    paragrafoPrecoQuadros.classList.add("preco");

    imagemQuadros.setAttribute("src", listFrames[i].image);
    nomeH3Quadros.innerText = `${listFrames[i].name}`;
    paragrafoPrecoQuadros.innerText = `${listFrames[i].price}`;

    elementoLiQuadros.appendChild(imagemQuadros);
    elementoLiQuadros.appendChild(nomeH3Quadros);
    elementoLiQuadros.appendChild(paragrafoPrecoQuadros);

    capturaListaDeQuadros.appendChild(elementoLiQuadros);
}