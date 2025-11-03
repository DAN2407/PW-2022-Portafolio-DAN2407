const pokemon = [
    {
      name: "Pikachu",
      type: "electric",
      attackPoints: 55,
      defensePoints: 40,
    },
    {
      name: "Bulbasaur",
      type: "grass",
      attackPoints: 49,
      defensePoints: 49,
    },
    {
      name: "Charmander",
      type: "fire",
      attackPoints: 52,
      defensePoints: 43,
    },
    {
      name: "Squirtle",
      type: "water",
      attackPoints: 48,
      defensePoints: 65,
    },
];

//El entrenador desea saber si existe algún pokemon tipo fuego en su equipo.
const firePokemon = pokemon.some((pokemon) => pokemon.type === "fire");
console.log(firePokemon);
console.log("\n------------------\n");
//El entrenador fue desafiado a una batalla pokemon, pero solo debe utilizar los dos primeros pokemon con los que cuenta en su equipo. Para ello debe hacer uso del método slice,y con dicho método crear un arreglo donde estén sus dos primeros pokemon.
const firstTwoPokemon = pokemon.slice(0, 2);
console.log(firstTwoPokemon);
console.log("\n------------------\n");
//En uno de sus viajes el entrenador pokemon tuvo demasiada, pero demasiada suerte y fue capaz de obtener a Mewtwo. El entrenador necesita agregar a dicho pokemon a su equipo haciendo uso de otro método llamado splice (Ingresa al nuevo pokemon en la posición 2 de tu arreglo). Mewtwo cuenta con las siguientes estadísticas:
const mewtwo = {
    name: "Mewtwo",
    type: "psychic",
    attackPoints: 110,
    defensePoints: 90,
};
pokemon.splice(2, 0, mewtwo);
console.log(pokemon);
console.log("\n------------------\n");

//Debido a situaciones externas el entrenador tuvo que quitar un pokemon de su equipo. El pokemon que se desea remover del equipo se encuentra en la posición 1. Se debe hacer uso del método slice para solucionar dicha problemática.
const newPokemon = pokemon.slice(0, 1).concat(pokemon.slice(2));
console.log(newPokemon);
console.log("\n------------------\n");

//El equipo de pokemon a experimentado ciertos cambios en su composición, por ende es necesario hacer uso del método map para mostrar la información de todos los pokemon. También se debe usar la desestructuración de objetos para obtener el name, type, attackPoints y defensePoints. El resultado debería ser el siguiente:
const pokemonInfo = pokemon.map((pokemon) => {
    const { name, type, attackPoints, defensePoints } = pokemon;
    return {
        name,
        type,
        attackPoints,
        defensePoints,
    };
}
);
console.table(pokemonInfo )
console.log("\n------------------\n");

//Finalmente, el entrenador desea saber si su equipo posee más puntos de ataque o más puntos de defensa. Dicha información le será de suma importancia para proximas batallas.

const totalAttackPoints = pokemon.reduce((total, pokemon) => total + pokemon.attackPoints, 0);

const totalDefensePoints = pokemon.reduce((total, pokemon) => total + pokemon.defensePoints, 0);

if (totalAttackPoints > totalDefensePoints) {
    console.log("El equipo posee más puntos de ataque");
}
else if (totalAttackPoints < totalDefensePoints) {
    console.log("El equipo posee más puntos de defensa");
}
else {
    console.log("El equipo posee la misma cantidad de puntos de ataque y defensa");
}
