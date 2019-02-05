

let computerScore = 0;
let playerScore = 0;

let computerPlay = () => {
    let results = ['rock', 'paper', 'scissors'];
    let rand = results[Math.floor(Math.random() * results.length)];
    return rand;

}

let oneRound = () => {
    let playerSelection = prompt("Choose plase: rock, paper or scissors.").toLowerCase();
    
    //Win solutions
    if (playerSelection.toLowerCase() == 'rock' && computerPlay() == 'scissors') {
        ++playerScore
        return "You win! Rock beats scissors ";
    } else if (playerSelection.toLowerCase() == 'paper' && computerPlay() == 'rock') {
        ++playerScore
        return "You win! Paper beats rock ";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerPlay() == 'paper') {
        ++playerScore
        return "You win! Scissors beats paper ";
    
    //Lose solutions
    } else if (playerSelection.toLowerCase() == 'rock' && computerPlay() == 'paper') {
        ++computerScore
        return "You lose! Paper beats rock ";
    } else if (playerSelection.toLowerCase() == 'paper' && computerPlay() == 'scissors') {
        ++computerScore
        return "You lose! Scissors beats paper ";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerPlay() == 'rock') {
        ++computerScore
        return "You lose! Rock beats scissors ";

    } else return "thats a tie"
}

let game = (i) => {
    for (i = 0; i < 5; i++) {
        console.log(oneRound());  
    }
    return whoWon();
}

    let whoWon = () => {
        if (playerScore > computerScore) {
            console.log("You win, with a score of: " + playerScore + " points. Against: " + computerScore + " points.")
        } else if (playerScore === computerScore) {
            console.log("Well... that is a tie") 
        } else 
        console.log ("You lose, keep trying, the computer beat you with a socre of " + computerScore + " against " + playerScore);
    }