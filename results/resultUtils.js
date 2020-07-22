import { findById } from '../utils.js';


export function renderCapturedData(dataObject, rawPokemon) {
    const pokemonObject = findById(rawPokemon, dataObject.id);
    
    const listEl = document.createElement('li');

    const titleEl = document.createElement('h3');
    titleEl.textContent = pokemonObject.pokemon;
    listEl.append(titleEl);

    const imgEl = document.createElement('img');
    imgEl.src = pokemonObject.url_image;
    listEl.append(imgEl);

    const capturedEl = document.createElement('p');
    capturedEl.textContent = `Captured: ${dataObject.captured}`;
    listEl.append(capturedEl);

    return listEl;
        
}

export function renderEncounterData(dataObject, rawPokemon) {
    const pokemonObject = findById(rawPokemon, dataObject.id);
    
    const listEl = document.createElement('li');

    const titleEl = document.createElement('h3');
    titleEl.textContent = pokemonObject.pokemon;
    listEl.append(titleEl);

    const imgEl = document.createElement('img');
    imgEl.src = pokemonObject.url_image;
    listEl.append(imgEl);

    const capturedEl = document.createElement('p');
    capturedEl.textContent = `Encountered: ${dataObject.encounter}`;
    listEl.append(capturedEl);

    return listEl;
        
}

export function mungedCaptured(someArray) {
    const newArray = [];
    for (let i = 0; i < someArray.length; i++) {
        const captured = someArray[i].captured;

        newArray.push(captured);
    }
    return newArray;
}

export function mungedEncounter(someArray) {
    const newArray = [];
    for (let i = 0; i < someArray.length; i++) {
        const captured = someArray[i].encounter;

        newArray.push(captured);
    }
    return newArray;
}

export function mungedNames(someArray, baseArray) {
    const newArray = [];
    for (let i = 0; i < someArray.length; i++) {
        const captured = findById(baseArray, someArray[i].id);
        const name = captured.pokemon;

        newArray.push(name);
        
    }
    return newArray;
}

function randomHexColor() {
    const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    return randomHex;
}

export function mungedBarColors(someArray) {
    const colorPackage = [];
    const backgroundColor = [];
    const borderColor = [];
    const capturedBackground = [];

    for (let i = 0; i < someArray.length; i++) {
        const randomColor = randomHexColor();

        const randomBackground = randomColor + '';
        backgroundColor.push(randomBackground);

        const complimentingBorder = randomColor + 'ff';
        borderColor.push(complimentingBorder);
        capturedBackground.push(complimentingBorder);
    }

    colorPackage.push(backgroundColor);
    colorPackage.push(borderColor);
    colorPackage.push(capturedBackground);

    return colorPackage;
}

