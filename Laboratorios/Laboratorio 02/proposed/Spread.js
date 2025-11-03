const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@test.com",
      age: 60,
      salary: 1099,
    },
    {
      id: 2,
      name: "Robert Singer",
      email: "bobby@test.com",
      age: 62,
      salary: 999,
    },
    {
      id: 3,
      name: "Misha Collins",
      email: "castiel@test.com",
      age: 35,
      salary: 899,
    },
    {
      id: 4,
      name: "Dean Winchester",
      email: "dean@test.com",
      age: 41,
      salary: 799,
    },
    {
      id: 5,
      name: "Sam Winchester",
      email: "sam@test.com",
      age: 36,
      salary: 699,
    },
];
// Es necesario mostrar el arreglo sin haber sido modificado
console.table(users);

//Crear una función llamada updateUser, la cual deberá cumplir con la funcionalidad de actualizar el name y el salary del usuario que coincida con el id enviado. Eliminar el usuario con la información sin modificar, y agregar el usuario con la información modificada en la misma posición. Es posible auxiliarte de splice para hacerlo posible.
const updateUser = (idUser, newName, newSalary) => {
    const index = users.findIndex((user) => user.id === idUser);
    const user = users[index];
    users.splice(index, 1, {
        ...user,
        name: newName,
        salary: newSalary,
    });
    return users;
};

updateUser(1, "John Winchester", 1500);

//Además, se debe crear una función llamada usersWithoutId la cual mostrará toda la información de los usuarios, exceptuando el id. Haz uso de map y del spread operator. El nuevo arreglo se verá de la siguiente manera:
const usersWithoutId = () => {
    return users.map((user) => {
        const { id, ...rest } = user;
        return rest;
    });
}

console.table(usersWithoutId());