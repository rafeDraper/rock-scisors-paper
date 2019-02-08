let computerScore = 0;
let playerScore = 0;

// Clean UI

 document.getElementById('userscore').textContent = playerScore;
 document.getElementById('aiscore').textContent = computerScore;

 document.querySelector('#papierDisp').style.display = 'none';
 document.querySelector('#steinDisp').style.display = 'none';
 document.querySelector('#schereDisp').style.display = 'none';

 document.querySelector('#papierDispR').style.display = 'none';
 document.querySelector('#steinDispR').style.display = 'none';
 document.querySelector('#schereDispR').style.display = 'none';

 //
 



////////////////////////////////////////////////////////



let computerPlay = () => {
    let results = ['rock', 'paper', 'scissors'];
    let rand = results[Math.floor(Math.random() * results.length)];
    return rand;

}

let oneRound = (player, computer) => {
     let playerSelection = player;
    
    
    let steineSchere = (document.getElementById('schereDispR').style.display = 'block') + (document.getElementById('steinDisp').style.display = 'block')
    
    let papierSteine = (document.getElementById('steinDispR').style.display = 'block') + (document.getElementById('papierDisp').style.display = 'block')
    
    let scherePapier = (document.getElementById('papierDispR').style.display = 'block') + (document.getElementById('schereDisp').style.display = 'block')
    


    //Win solutions
    if (player == 'rock' && computer == 'scissors') {
        ++playerScore
        return steineSchere.toggle;  
       } else if (player == 'paper' && computer == 'rock') {
        ++playerScore
        return papierSteine;
    } else if (player == 'scissors' && computer == 'paper') {
        ++playerScore
        return scherePapier;
    
    //Lose solutions
    } else if (player == 'rock' && computer == 'paper') {
        ++computerScore
        return "You lose! Paper beats rock ";
    } else if (player == 'paper' && computer == 'scissors') {
        ++computerScore
        return "You lose! Scissors beats paper ";
    } else if (player == 'scissors' && computer == 'rock') {
        ++computerScore
        return "You lose! Rock beats scissors ";

    } else return "thats a tie"
}

function game(player) {
    if (playerScore < 5 && computerScore < 5) {
        let playerSelection = player;
        const computerSelection = computerPlay();
        let roundText = oneRound(playerSelection,computerSelection);

    document.getElementById("userscore").textContent = playerScore;
    document.getElementById("aiscore").textContent = computerScore;
    }


}


let rockBtn = document.querySelector('#steinicon');
let paperBtn = document.querySelector('#papiericon');
let scissorsBtn = document.querySelector('#schereicon');

//Event listeners for buttons, each pass their string into game(), 

rockBtn.addEventListener('click', ()=>  {
    game('rock');
});

paperBtn.addEventListener('click', ()=>  {
    game('paper');
});

scissorsBtn.addEventListener('click', ()=>  {
    game('scissors');
});

