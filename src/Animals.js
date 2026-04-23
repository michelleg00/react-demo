const animals = ["Whales", "Birds", "Cats", "Dinosaurs"];

function capitalize(animal) {
    return animal.toUpperCase();
}

const capitalizedAnimals = animals.map(capitalize);

console.log(capitalizedAnimals);

const price = 8.33
console.log(Math.ceil(price) + " €");