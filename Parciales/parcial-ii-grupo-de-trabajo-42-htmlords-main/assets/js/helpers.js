import {filters, firstRender} from './models.js';
import { actualDeck, _boosterRoll } from './render.js';

//=====helpers========

//mapCard

const mapCard = (item) => {
    item = {
        id: item?.id,
        name: item?.name,
        power: item?.power,
        toughness: item?.toughness,
        colors: item?.colors??[],
        image: item?.image_uris?.large??'',
        manaCost: item?.mana_cost,
        rarity: item?.rarity,
        type: item?.type_line,
        inDeck: false,
    }

    for (const propName in item) { 
        if (item[propName] === null || item[propName] === undefined) {
          delete item[propName];
        }
    }
    return item;
}

const reduceResults = (data, limit) => {
    let dLength = data.length;
    let result= [];

    let randomIndexes = Array.from({length: limit}, () => Math.floor(Math.random() * dLength));

    result = data.filter(item => randomIndexes.includes(data.indexOf(item)));

    return result;
}

const getSpecialCard = () => {
    const _number = _boosterRoll === 0 ? 1 : _boosterRoll;
    console.log(_boosterRoll);
    return (_number % 4) === 0 ? filters.mythic : filters.rare
} 

const aplication = document.querySelector('.CardContainer');
const aplicationDeck = document.querySelector('.DeckContainer');

let myDeck = [];

const clearData = () => {
    aplication.innerHTML = firstRender;
}

const renderAllDeckCard = () => {
    if (actualDeck) {
        myDeck = actualDeck;
    }

    aplicationDeck.innerHTML = '';
    myDeck.forEach(element => {
        printDeckCard(element);
    });
}

const deleteCardDeck = (item) => {
    let index = myDeck.indexOf(item);

    myDeck.splice(index, 1);

    console.log(myDeck);

    renderAllDeckCard();
}

const printDeckCard = (item) => {
    const card = document.createElement('div');
    card.classList.add('Card');
    card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <div class="card-info">
        <h2 class="card-name">
            ${item.name}
        </h2>

        <p class="card-type">
            ${item.name}
            ${item.type}
            ${item.power}/${item.toughness}
        </p>
        <button class="delete" >-</button>
    </div>
    `;
    aplicationDeck.appendChild(card);

    card.querySelector(`.delete`)?.addEventListener('click', (event)=> {
        deleteCardDeck(item);
    });
}

const addCardDeck = (item) => {
    myDeck.push(item);
    console.log(myDeck);
    printDeckCard(item);
}

const printBoosterCards = (item, index) => {
    const card = document.createElement('div');
    card.classList.add('Card');
    card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <div class="card-info">
        <h2 class="card-name">
            ${item.name}
        </h2>

        <p class="card-type">
            ${item.name}
            ${item.type}
            ${item.power}/${item.toughness}
        </p>
        <button class="add">+</button>
    </div>
    `;
    aplication.replaceChild(card, aplication.children[index]);

    card.querySelector(`.add`)?.addEventListener('click', (event)=> {
        addCardDeck(item);
    });
}

//return myDeck 

const getMyDeck  = () => myDeck;

export {
    mapCard,
    reduceResults,
    getSpecialCard,
    printBoosterCards,
    clearData,
    renderAllDeckCard,
    getMyDeck,
}