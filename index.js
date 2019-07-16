const readline = require('readline-sync');

number = getNumberFromPrompt('How many numbers would you like to print?');
rules = getStringFromPrompt('Which rules would you like to play with?').toLowerCase();

for (let i = 1; i <= number; i++) {
    result = getResult(i, rules);
    console.log(result);
}



function getResult(number, rules) {
    let list = [];
    if (number % 3 == 0 && rules.includes('fizz')) {
        list.push('Fizz');
    }
    if (number % 13 == 0 && rules.includes('fezz')) {
        list.push('Fezz'); 
    }
    if (number % 5 == 0 && rules.includes('buzz')) {
        list.push('Buzz');
    }
    if (number % 7 == 0 && rules.includes('bang')) {
        list.push('Bang');
    }
    if (number % 11 == 0 && rules.includes('bong')) {
        if (list.includes('Fezz')) {
            list = ['Fezz','Bong'];
        } else {
        list = ['Bong'];
        }
    }
    if (number % 17 == 0 && rules.includes('reverse')) {
        list = list.reverse();
    }
    if (list == '') {
        list = [number];
    }
    return list.join('');
}

function getStringFromPrompt(prompt) {
    console.log(prompt);
    return readline.prompt();
}
function getNumberFromPrompt(prompt) {
    return +getStringFromPrompt(prompt);
}