import {urls, filters, pagination} from './models.js';
import {mapCard, reduceResults, getSpecialCard} from './helpers.js';

//fetch get data
const getCards = (url, filters, page = 1, limit) => {
    return fetch (`${url}${filters}&page=${page}`)
    .then(response => response.json())
    .then(data => {
            if(!data.data) return mapCard(data);
            return reduceResults(data.data, limit).map(item => mapCard(item));
    }).catch(err => {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

//booster section
const getBooster = async() => {
    let common, uncommon, ROrM, basicLand;

    //common cards
    await getCards(urls.search, filters.common, (Math.floor(Math.random() * pagination.common)), 10).then(response => common = response);
    //uncommon cards
    await getCards(urls.search, filters.uncommon, (Math.floor(Math.random() * pagination.uncommon)), 3).then(response => uncommon = response);
    //basic land card
    await getCards(urls.random, filters.basicLand).then(response => basicLand = response);
    //rare and mythic card
    await getCards(urls.random, getSpecialCard()).then(response => ROrM = response);

    let booster = [...common, ...uncommon, basicLand, ROrM]

    return booster;
}

export {
    getBooster,
}