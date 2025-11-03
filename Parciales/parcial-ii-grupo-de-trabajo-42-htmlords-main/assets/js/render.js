import { getBooster } from "./controllers.js";
import { printBoosterCards, getMyDeck, clearData, renderAllDeckCard} from './helpers.js';

let actualBooster = [];
let actualDeck = [];

let _boosterRoll = 0;

const printBooster = () => {
    getBooster().then(response => {
        console.log(response);
        actualBooster = response;
        response.forEach((item, index) => {
            printBoosterCards(item, index);
        })
    })

    _boosterRoll++;
    
    setTimeout(() => console.log(actualBooster), 5000);
};

//boton para conseguir nuevos boosters  y no cambie de posicion la pagina
const button = document.querySelector('#btnGNB');
button.addEventListener('click', () => {
    printBooster();
});
    
//boton para limpiar el booster
const button2 = document.querySelector('#btnReset');
button2.addEventListener('click', () => {
    clearData();
});

//boton para guardar el booster en el deck
const button3 = document.querySelector('#btnSAC');
button3.addEventListener('click', () => {
    actualDeck.push(...actualBooster);
    actualDeck.push(...getMyDeck());
    console.log(actualDeck);
    renderAllDeckCard();
});


//DECK

//mostrar cartas del deck en el html 

const loadStoredDeck = () => {
    const cards = JSON.parse(localStorage.getItem('cards'))??[];

    actualDeck.push(...cards);

    console.log(actualDeck);

    renderAllDeckCard();
} 


//boton para descargar el deck en formato .json
const button4 = document.querySelector('#saveD');
button4.addEventListener('click', () => {
    // const blob = new Blob([json], {type: 'application/json'});
    // const href = URL.createObjectURL(blob);
    // const link = document.createElement('a');
    // link.href = href;
    // link.download = 'deck.json';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    console.log(actualDeck);
    let data = localStorage.setItem('cards', JSON.stringify(actualDeck));
    let file = new Blob([data], {type: "json"});
    let a = document.createElement("a"), url = URL.createObjectURL(file);
    a.href = url;
    a.download = "myDeck.json";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    })
});

//boton para limpiar el deck del local storage
const button5 = document.querySelector('#clearD');
button5.addEventListener('click', () => {
    localStorage.clear();
    actualDeck = [];
    console.log(actualDeck);
    renderAllDeckCard();
}
);

//boton para ingresar un deck desde un archivo .json
const button6 = document.querySelector('#loadD');
button6.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = readerEvent => {
            const content = readerEvent.target.result;
            const cards = JSON.parse(content);
            cards.forEach((card) => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('Card');
                cardElement.innerHTML = card;
                deck.appendChild(cardElement);
            });
        }
    }
    input.click();
});


export {
    loadStoredDeck,
    actualDeck,
    _boosterRoll,
}
