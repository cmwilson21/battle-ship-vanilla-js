//First we need three variables to hold the location of the three sections of the ship.
// Then declare a variable to hold the user's current guess.
//Declare a variable to hold the number of hits.
//Declare a variable to hold the number of guesses.
//Declare a variable to keep rack of whether the ship is sunk or not.

const loc1 = 3;
const loc2 = 4;
const loc3 = 5;

let guess ;
let hits = 0;
let numberOfGuesses = 0;

let isSunk = false;

while (isSunk === false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
        if (guess == loc1 || guess == loc2 || guess == loc3) {
            hits = hits + 1;
        }
    }
}