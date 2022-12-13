const carnesList = document.querySelector('#carnes')
const verdurasList = document.querySelector('#verduras')
const frutasList = document.querySelector('#frutas')
const frutasInput = document.querySelector('#frutas-input')

const firstItem = document.getElementById('first-item');
const secondItem = document.getElementById('second-item');
const results = document.getElementById('results-space');
const buttonCalc = document.getElementById('calc');

buttonCalc.addEventListener('click', getSum);

console.log(firstItem);

function getSum(){

    let result = parseInt(firstItem.value) + parseInt(secondItem.value);
    results.innerHTML = result;

}



frutasInput.setAttribute('value', 'Hello, world');

