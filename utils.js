import { rawData } from './pokemon.js';

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

//function for adding a captured pokemon to a new array

export function capturedPokemon(dataArray, capturedPokemon) {
    const trackingPokemon = findById(dataArray, capturedPokemon);

    trackingPokemon.captured ++;

    addPokemonData(dataArray);
}
//function for keeping count which pokemon have been shown and how many times.. Think incrementing the quantity
export function encounteredPokemon(dataArray, seenPokemon) {
    const trackingPokemon = findById(dataArray, seenPokemon);
    if (!trackingPokemon) {
        const initialPokemon = {
            id: seenPokemon,
            captured: 0,
            encounter: 1
        };
        dataArray.push(initialPokemon);
    } else {
        trackingPokemon.encounter ++;
    }
    addPokemonData(dataArray);
}

//function for getting data from storage
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

export function getAllPokemon() {
    let pokemon = localStorage.getItem('POKEMON');

    if (!pokemon) {
        pokemon = JSON.stringify(rawData);

        localStorage.setItem('POKEMON', pokemon);
    }

    const parsedData = JSON.parse(pokemon);
    return parsedData;
}

