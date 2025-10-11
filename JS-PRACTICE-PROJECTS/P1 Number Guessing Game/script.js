let randomNumber = Math.round(Math.random() * 10) + 1;
//console.log(randomNumber);

function showPrompt() {

    while(true) {

        let userInput = prompt("Guess a number from 1-10: ");

        if (userInput == null) break;

        if (userInput == "" || isNaN(userInput)) {
            alert("Please enter a number.")
        } else if (userInput == randomNumber) {
            alert("You're right! Bye.");
            break;
        } else if (userInput > randomNumber){
            alert("You're too high!"); 
        } else if (userInput < randomNumber && userInput >= 0) {
            alert("You're too low!");
        }
    };
};

showPrompt();