// Original code and idea by @apple.cider.3

function main() {
    let x = prompt("Easy mode: 10 guesses, between 0 and 50.\nMedium mode: 10 guesses, between 0 and 100.\nHard mode: 5 guesses, between 0 and 100.\nExtreme mode: 3 guesses, between 0 and 100.\nHell mode: 1 guess, between 0 and 100.\nWhat difficulty would you like to play on? (easy, medium, hard, extreme, hell)");
    let i, max;
    if (x == "easy") {
        i = 10;
        max = 50;
    } else if (x == "medium") {
        i = 10;
        max = 100;
    } else if (x == "hard") {
        i = 5;
        max = 100;
    } else if (x == "extreme") {
        i = 3;
        max = 100;
    } else if (x == "hell") {
        i = 1;
        max = 100;
    };

    const roll = randomnumber(1, max);
    while (i >= 0) {
        if (i == 0) {
            alert("You failed!! The answer was " + roll + ".");
            break;
        };
        i--;
        let guess = prompt("What is your guess?");
        if (guess > max || guess < 0) {
            alert(`Since you couldn't follow the rules and stay between 0 and ${max}, I'm taking away a guess >:)`);
        } else if (guess == roll){
            alert("Correct!");
            break;
        } else if (guess > roll) {
            alert("Your guess was too high. Guesses remaining: " + i);
        } else if (guess < roll) {
            alert("Your guess was too low. Guesses remaining: " + i);
        };
    };
};