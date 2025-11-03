const stageData = [
    { id: 1, name: "Ancho-V Games", ruleSet:"Turf War", active: true, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 2, name: "Arowana Mall", ruleSet:"Turf War", active: false, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 3, name: "Blackbelly Skatepark", ruleSet:"Turf War", active: false, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 4, name: "Camp Triggerfish", ruleSet:"Turf War", active: false, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 5, name: "Flounder Heights", ruleSet:"Turf War", active: false, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 6, name: "Hammerhead Bridge", ruleSet:"Turf War", active: false, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 7, name: "Inkblot Art Academy", ruleSet:"Turf War", active: true, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 8, name: "Kelp Dome", ruleSet:"Turf War", active: false, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 9, name: "Mahi-Mahi Resort", ruleSet:"Turf War", active: false, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 10, name: "Moray Towers", ruleSet:"Turf War", active: false, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 11, name: "Musselforge Fitness", ruleSet:"Turf War", active: false, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 12, name: "Scorch Gorge", ruleSet:"Turf War", active: true, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 13, name: "Eeltail Alley", ruleSet:"Turf War", active: false, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 14, name: "Undertow Spillway", ruleSet:"Turf War", active: false, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 15, name: "Walleye Warehouse", ruleSet:"Turf War", active: false, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 16, name: "Hagglefish Market", ruleSet:"Turf War", active: true, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 17, name: "Museum d'Alfonsino", ruleSet:"Turf War", active: false, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 18, name: "Port Mackerel", ruleSet:"Turf War", active: false, description: "The objective is to cover the most turf with your team's color. The team with the most turf covered wins.",},
    { id: 19, name: "Sockeye Station", ruleSet:"Salmon Run", active: true, description: "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",},
    { id: 20, name: "Sturgeon Shipyard", ruleSet:"Salmon Run", active: false, description: "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",},
    { id: 21, name: "Spawning Grounds", ruleSet:"Salmon Run", active: false, description: "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",},
    { id: 22, name: "Gone Fission Hydroplant", ruleSet:"Salmon Run", active: true, description: "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",},
    { id: 23, name: "Marooner's Bay", ruleSet:"Salmon Run", active: false, description: "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",},
    { id: 24, name: "Lost Outpost", ruleSet:"Salmon Run", active: true, description: "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",},
    { id: 25, name: "Salmonid Smokeyard", ruleSet:"Salmon Run", active: false, description: "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",},
    { id: 26, name: "Ruins of Ark Polaris", ruleSet:"Salmon Run", active: true, description: "The objective is to defeat as many Salmonids as possible. The team with the most Salmonids defeated wins.",},
];

//agrupe mapas de un arreglo dependiendo del valor retornado por el callback
const groupBy = (array, callback) => {
    const groups = {};
    array.forEach((item) => {
        const key = callback(item);
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(item);
    });
    return groups;
}

//retorna un arreglo con los mapas activos
console.log(stageData.filter((stage) => stage.active));

//retorna un arreglo con los mapas que no estan activos
console.log(stageData.filter((stage) => !stage.active));

//retorna un arreglo con los mapas que no estan activos
console.log(stageData.filter((stage) => stage.description.includes("Salmon Run")));

//retorna un arreglo con los mapas que no estan activos
console.log(stageData.filter((stage) => stage.description.includes("Turf War")));

//retorna un arreglo con los mapas que no estan activos
console.log(stageData.filter((stage) => stage.ruleSet === "Salmon Run"));

//retorna un arreglo con los mapas que no estan activos
console.log(stageData.filter((stage) => stage.ruleSet === "Turf War"));

//retorna un arreglo con los mapas que no estan activos
console.log(stageData.filter((stage) => stage.ruleSet === "Turf War").filter((stage) => stage.active));

//retorna un arreglo con los mapas que no estan activos
console.log(stageData.filter((stage) => stage.ruleSet === "Turf War" && stage.active));

//retorna un arreglo con los mapas que no estan activos
console.log(stageData.filter((stage) => stage.ruleSet === "Turf War" && stage.active).map((stage) => stage.name));

//retorna un arreglo con los mapas que no estan activos
console.log(stageData.filter((stage) => stage.ruleSet === "Turf War" && stage.active).map((stage) => stage.name).join(" - "));

//retorna un arreglo con los mapas que no estan activos
console.log(stageData.filter((stage) => stage.ruleSet === "Turf War" && stage.active).map((stage) => stage.name).join(" - "));

//retorna un arreglo con los mapas que no estan activos
console.log(stageData.filter((stage) => stage.ruleSet === "Turf War" && stage.active).map((stage) => stage.name).join(" - "));

//retorna un arreglo con los mapas que no estan activos
console.log(stageData.filter((stage) => stage.ruleSet === "Turf War" && stage.active).map((stage) => stage.name).join(" - "));
