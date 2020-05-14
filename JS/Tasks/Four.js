const prompt = require('prompt-sync')();

let letter = prompt('Letter: ');

let vowels = ['a','o','y','u','i','e'];

var letterNumber = /^[a-z]+$/;

if (letter.length != 1) {
    console.log('Too long input');
    return false;
}

if((letter.match(letterNumber)))
{   
    if (vowels.includes(letter.toLowerCase())) {
        console.log('Letter is vowel');
    }
    else {
        console.log('Letter is not vowel');
    }
    return true;
}
else
{ 
   console.log("Bad input");
 
   return false; 
}

