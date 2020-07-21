

// function for getting random numbers between 0 and remaining pokemon length. whole numbers
export function getRandomPokemon(pokemonArray) {
    let copyOfArray = pokemonArray.slice();
    const randomPokeIndex = Math.floor(Math.random() * copyOfArray.length);
    copyOfArray.splice(randomPokeIndex, 1);
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

export function getPokemonData(){
    const initialEmpty = '[]';
    const rawData = localStorage.getItem('DATA') || initialEmpty;
    const data = JSON.parse(rawData);

    return data;
}

export function addPokemonData(data) {
    const stringyData = JSON.stringify(data);
    localStorage.setItem('DATA', stringyData);
}

