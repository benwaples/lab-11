// function for getting random numbers between 0 and remaining pokemon length. whole numbers
export function getRandomPokemon(pokemonArray) {
    let copyOfArray = pokemonArray.slice();
    const randomPokeIndex = Math.floor(Math.random() * copyOfArray.length);
    const positionOneAhead = Number(randomPokeIndex) + 1;
    copyOfArray.splice(randomPokeIndex, positionOneAhead);
    const pokemonPackage = [copyOfArray, pokemonArray[randomPokeIndex]];
    return pokemonPackage;
}

//find by id
export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i ++) {
        if (someArray[i].id === someId && Array.isArray(someArray)){
            return someArray[i];
        } else {
            false;
        }
    }
}

//function for adding a selected pokemon to a new array

//function for keeping count which pokemon have been shown and how many times.. Think incrementing the quantity