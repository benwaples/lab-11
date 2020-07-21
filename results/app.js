//import and grab
import { getPokemonData, getAllPokemon } from '../utils.js';
import { renderCapturedData, renderEncounterData } from './resultUtils.js';

const capturedResults = document.querySelector('#captured-results');
const encounteredResults = document.querySelector('#encountered-results');


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

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart (ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
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
