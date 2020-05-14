const prompt = require('prompt-sync')();

let side1 = parseInt(prompt('Lenght1: '));
let side2 = parseInt(prompt('Lenght2: '));
let side3 = parseInt(prompt('Lenght3: '));


if (side1 === side2 && side2 === side3) {
    console.log('Triangle is Equilateral');
    return true;
}
else if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('Triangle is Isosceles');
    return true;
}
else {
    console.log('Triangle is scalene');
}