let itens = [
    product1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    product2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    product3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    product4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    product5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    product6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
];

let listFigures = [];
let listFrames = [];
const getListFrames = document.querySelector("#frames")
const getListFigures = document.querySelector("#figures")

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

    let elementLifigures = document.createElement("li");
    elementLifigures.classList.add("cards");
    let imagefigures = document.createElement("img");
    imagefigures.classList.add("image_cards");
    let nameH3figures = document.createElement("h3");
    let paragraphPriceFigures = document.createElement("p");

    imagefigures.setAttribute("src", listFigures[i].image);
    nameH3figures.innerText = `${listFigures[i].name}`;
    paragraphPriceFigures.innerText = `${listFigures[i].price}`;

    elementLifigures.appendChild(imagefigures);
    elementLifigures.appendChild(nameH3figures);
    elementLifigures.appendChild(paragraphPriceFigures);

    getListFigures.appendChild(elementLifigures);
}

for (let i = 0; listFrames.length; i++) {

    let elementLiFrames = document.createElement("li");
    elementLiFrames.classList.add("cards");
    let imageFrames = document.createElement("img");
    imageFrames.classList.add("image_cards");
    let nomeH3frames = document.createElement("h3");
    nomeH3frames.classList.add("title_h3");
    let paragraphPriceFrames = document.createElement("p");
    paragraphPriceFrames.classList.add("preco");

    imageFrames.setAttribute("src", listFrames[i].image);
    nomeH3frames.innerText = `${listFrames[i].name}`;
    paragraphPriceFrames.innerText = `${listFrames[i].price}`;

    elementLiFrames.appendChild(imageFrames);
    elementLiFrames.appendChild(nomeH3frames);
    elementLiFrames.appendChild(paragraphPriceFrames);

    getListFrames.appendChild(elementLiFrames);
}