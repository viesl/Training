const prompt = require('prompt-sync')();

let EvenNumbers = [];

for (let index = 0; index < 10; index++) {
    let number = parseInt(prompt('Number : '));
    if ((number % 2) === 0) {
        EvenNumbers.push(number);
    }
}

console.log(EvenNumbers);