const id = 1;
const champs = [
    {
        id: 1,
        name: "Warwick",
        title: "the Blood Hunter",
    },
    {
        id: 2,
        name: "Ahri",
        title: "the Nine-Tailed Fox",   
    },
    {
        id: 3,
        name: "Jhin",
        title: "the Virtuoso",
    },
];

const items = [
    {
      id: 1,
      name: "Sheen",
      cost: 700,
    },
    {
      id: 2,
      name: "Needlessly Large Rod",
      cost: 1300,
    },
];

const getChampById = (id, callback) => {
    const champ = champs.find((champ) => champ.id === id);

    if (!champ) {
    callback('Champion not found with ${id}');
    } else {
    callback(null, champ);
    }
};

const getItemById = (id, done) => {
    const item = items.find((item) => item.id === id);

    if (!item) {
    done('Item not found with ${id}');
    } else{
    done(null, item);
    }
};

getChampById(id, (err, champ) => {
    if (err) {
        return console.log(`Warning: ${err}`);
    } else {
        console.log(`${champ.title} - ${champ.name}`);
    }
});

getItemById(id, (err, item) => {
    if (err) {
        return console.log(`Warning: ${err}`);
    } else{
        console.log(`Has a ${item.name} which cost ${item.cost} gold.` );
    }
});
