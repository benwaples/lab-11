//import and grab
import { getPokemonData, getAllPokemon } from '../utils.js';
import { 
    renderCapturedData, 
    renderEncounterData, 
    mungedCaptured, 
    mungedEncounter, 
    mungedNames, 
    mungedBarColors
} from './resultUtils.js';

const capturedResults = document.querySelector('#captured-results');
const encounteredResults = document.querySelector('#encountered-results');
const clearButton = document.querySelector('#clear');


//initialize
const data = getPokemonData();
const rawPokemon = getAllPokemon();


// change state

for (let i = 0; i < data.length; i++){
    let pokemon = data[i];
    const isCaptured = pokemon.captured;
    if (isCaptured){
        const capturedPokemon = renderCapturedData(pokemon, rawPokemon);
        capturedResults.append(capturedPokemon);
    }
}

for (let i = 0; i < data.length; i++){
    let pokemon = data[i];
    const capturedPokemon = renderEncounterData(pokemon, rawPokemon);
    encounteredResults.append(capturedPokemon);
}

const mungedCapturedData = mungedCaptured(data);
const mungedEncounterData = mungedEncounter(data);
const mungedNamesData = mungedNames(data, rawPokemon);
const mungedBarColorsData = mungedBarColors(data);


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart (ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: mungedNamesData,
        datasets: [{
            label: 'Captured Pokemon',
            data: mungedCapturedData,
            backgroundColor: mungedBarColorsData[0],
            borderColor: mungedBarColorsData[1],
            borderWidth: 1
        },
        {
            label: 'Encountered Pokemon',
            data: mungedEncounterData,
            backgroundColor: mungedBarColorsData[3],
            borderColor: mungedBarColorsData[1],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

clearButton.addEventListener('click', () => {
    localStorage.removeItem('DATA');
    window.location = '../index.html';
});