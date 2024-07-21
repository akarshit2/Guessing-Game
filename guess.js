const max = prompt("Please enter the max number : ");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Please guess the number : ");

while(true){
    if(guess=="quit"){
        console.log("You quit the game.");
        break;
    }

    if(guess==random){
        console.log(`Congrats! You guess the right number and that is ${guess}`);
        break;
    }else if(guess<random){
        guess = prompt("Hint : Your guess is too small. Please try again : ");
    }else if(guess>random){
        guess = prompt("Hint : Your guess is too large. Please try again : ");
    }
}