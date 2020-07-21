import { rawData } from './pokemon.js';
import { 
    getRandomPokemon, 
    findById,
    getPokemonData,
    encounteredPokemon,
    capturedPokemon
} from './utils.js';

// import functions and grab DOM elements
const remainingTriesSpan = document.querySelector('#remaining-tries'); 
const pokemonDiv = document.querySelector('#pokemon-div');
const nextButton = document.querySelector('#next');
const seeResultsButton = document.querySelector('#see-results');


// initialize state

let remainingPokemon = rawData.slice();
let countCaptures = 10;

resetPage();

function resetPage() {
    const data = getPokemonData();

    const pokemonPackage1 = getRandomPokemon(remainingPokemon);
    const randomPokemon1 = pokemonPackage1[1];
    encounteredPokemon(data, randomPokemon1.id);

    const pokemonPackage2 = getRandomPokemon(pokemonPackage1[0]);
    const randomPokemon2 = pokemonPackage2[1];
    encounteredPokemon(data, randomPokemon2.id);

    const pokemonPackage3 = getRandomPokemon(pokemonPackage2[0]);
    const randomPokemon3 = pokemonPackage3[1];
    encounteredPokemon(data, randomPokemon3.id);

    const pokemonLabels = document.querySelectorAll('label');
    const pokemon1Label = pokemonLabels[0];
    const pokemon2Label = pokemonLabels[1];
    const pokemon3Label = pokemonLabels[2];

    //add the pokemon 1 to page
    const pokemon1Input = pokemon1Label.children[0];
    pokemon1Input.value = randomPokemon1.id;
    pokemon1Input.addEventListener('click', selectedPokemon);
    const pokemon1img = pokemon1Label.children[1];
    pokemon1img.src = randomPokemon1.url_image;
    const encounteredSpan1 = pokemon1Label.children[2];
    const capturedSpan1 = pokemon1Label.children[3];
    const thisData1 = findById(data, randomPokemon1.id);
    encounteredSpan1.textContent = `Encounters: ${thisData1.encounter}`;
    capturedSpan1.textContent = `Captured: ${thisData1.captured}`;

    //add the pokemon 2 to page
    const pokemon2Input = pokemon2Label.children[0];
    pokemon2Input.value = randomPokemon2.id;
    pokemon2Input.addEventListener('click', selectedPokemon);
    const pokemon2img = pokemon2Label.children[1];
    pokemon2img.src = randomPokemon2.url_image;
    const encounteredSpan2 = pokemon2Label.children[2];
    const capturedSpan2 = pokemon2Label.children[3];
    const thisData2 = findById(data, randomPokemon2.id);
    encounteredSpan2.textContent = `Encounters: ${thisData2.encounter}`;
    capturedSpan2.textContent = `Captured: ${thisData2.captured}`;

    //add the pokemon 3 to page
    const pokemon3Input = pokemon3Label.children[0];
    pokemon3Input.value = randomPokemon3.id;
    pokemon3Input.addEventListener('click', selectedPokemon);
    const pokemon3img = pokemon3Label.children[1];
    pokemon3img.src = randomPokemon3.url_image;
    const encounteredSpan3 = pokemon3Label.children[2];
    const capturedSpan3 = pokemon3Label.children[3];
    const thisData3 = findById(data, randomPokemon3.id);
    encounteredSpan3.textContent = `Encounters: ${thisData3.encounter}`;
    capturedSpan3.textContent = `Captured: ${thisData3.captured}`;

    pokemon1Input.disabled = false;
    pokemon2Input.disabled = false;
    pokemon3Input.disabled = false;

    
}

function selectedPokemon(e) {
    countCaptures--;
    
    const thisPokemon = Number(e.target.value);

    const data = getPokemonData();
    capturedPokemon(data, thisPokemon);
    
    if (countCaptures === 0) {
        alert('you\'re all out of pokeballs! Go to the next page to see your stats');
        seeResultsButton.classList.remove('hidden');
        nextButton.classList.add('hidden');
    } else {
        nextButton.classList.remove('hidden');
    }
    
    pokemonDiv.classList.add('faded');

    
    const pokemonLabels = document.querySelectorAll('label');
    const pokemon1Label = pokemonLabels[0];
    const pokemon1Input = pokemon1Label.children[0];
    pokemon1Input.disabled = true;
    const pokemon2Label = pokemonLabels[1];
    const pokemon2Input = pokemon2Label.children[0];
    pokemon2Input.disabled = true;
    const pokemon3Label = pokemonLabels[2];
    const pokemon3Input = pokemon3Label.children[0];
    pokemon3Input.disabled = true;
    // debugger
    
    
    remainingTriesSpan.textContent = countCaptures;
}

nextButton.addEventListener('click', () => {
    resetPage();

    // console.log('remaining poke', remainingPokemon);

    pokemonDiv.classList.remove('faded');
    nextButton.classList.add('hidden');
});




//set event listeners to update state and DOM