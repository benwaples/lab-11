import { rawData } from './pokemon.js';
import { getRandomPokemon, findById } from './utils.js';

// import functions and grab DOM elements
const remainingTriesSpan = document.querySelector('#remaining-tries'); 
const pokemonDiv = document.querySelector('#pokemon-div');
const nextButton = document.querySelector('#next');
const seeResultsButton = document.querySelector('#see-results');


// initialize state

let remainingPokemon = rawData.slice();
let capturedPokemon = [];
let encounteredPokemon = [];
let countCaptures = 0;



function resetPage() {
    
    const randomPokemon1 = getRandomPokemon(remainingPokemon);
    let randomPokemon2 = getRandomPokemon(remainingPokemon);
    let randomPokemon3 = getRandomPokemon(remainingPokemon);

    if (countCaptures === 10) {
        seeResultsButton.classList.remove('hidden');
    }
    

    while (randomPokemon1.id === randomPokemon2.id && randomPokemon1.id === randomPokemon3.id && randomPokemon2.id === randomPokemon3.id) {
        randomPokemon2 = getRandomPokemon(remainingPokemon);
        randomPokemon3 = getRandomPokemon(remainingPokemon);
    }


    const thisSetOfPokemon = [randomPokemon1, randomPokemon2, randomPokemon3];

    for (let i = 0; i < thisSetOfPokemon.length; i++) {
        const thisPokemon = thisSetOfPokemon[i].id;
        const encounter = findById(encounteredPokemon, thisPokemon);

        if (!encounter) {
            const initializePokemon = {
                id: thisPokemon.id,
                seen: 1
            };

            encounteredPokemon.push(initializePokemon);
        } else {
            encounteredPokemon.seen ++;
        }
    // send back to local storage here

    }

    const pokemonLabels = document.querySelectorAll('label');
    const pokemon1Label = pokemonLabels[0];
    const pokemon2Label = pokemonLabels[1];
    const pokemon3Label = pokemonLabels[2];

    //add the pokemon 1 to page
    const pokemon1Input = pokemon1Label.children[0];
    pokemon1Input.value = randomPokemon1.id;
    pokemon2Input.addEventListener('click', selectedPokemon);
    const pokemon1img = pokemon1Label.children[1];
    pokemon1img.src = randomPokemon1.url_image;

    //add the pokemon 2 to page
    const pokemon2Input = pokemon2Label.children[0];
    pokemon2Input.value = randomPokemon2.id;
    pokemon2Input.addEventListener('click', selectedPokemon);
    const pokemon2img = pokemon2Label.children[1];
    pokemon2img.src = randomPokemon2.url_image;

    //add the pokemon 3 to page
    const pokemon3Input = pokemon3Label.children[0];
    pokemon3Input.value = randomPokemon2.id;
    pokemon3Input.addEventListener('click', selectedPokemon);
    const pokemon3img = pokemon3Label.children[1];
    pokemon3img.src = randomPokemon3.url_image;


    remainingTriesSpan.textContent = countCaptures;
}

resetPage();

function selectedPokemon(e) {
    countCaptures++;

    const thisPokemon = e.target.value;
    const pokemonIndex = findById(remainingPokemon, thisPokemon);

    const addToCaptured = remainingPokemon.splice(pokemonIndex, 1);

    capturedPokemon.push(addToCaptured);

    nextButton.classList.remove('hidden');
}



//set event listeners to update state and DOM