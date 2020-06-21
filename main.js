'use strict'


// FOLLOW INSTRUCTION IN TEXT BOOK

// assert library is used for testing
const assert = require('assert');

//readline library is used to read input from the user
const readline = require('readline');

// setting up the readline settings
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//try to make the program generate a random solution
let solution = 'abcd'; 

let askForGuess = function(){
    rl.question('Guess: ', function(guess){
      let hint = generateHint(guess);
      //... some more stuff



    let gameOver; // figure out how to set this
    if(!gameOver) {
       askForGuess();
    }
    })
}

// kick game off
askForGuess();