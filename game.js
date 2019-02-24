let computerScore = 0;
let playerScore = 0;

// Clean UI

 document.getElementById('punkteL').textContent = playerScore;
 document.getElementById('punkteR').textContent = computerScore;

////////////////////////////////////////////////////////



let computerPlay = () => {
    let results = ['rock', 'paper', 'scissors'];
    let random = results[Math.floor(Math.random() * results.length)];
    if (random == 'rock') {
        return document.querySelector('#cs3').style.display = 'block', document.querySelector('#cs2').style.display = 'none', document.querySelector('#cs1').style.display = 'none', random;
    } else if (random == 'paper') {
        return document.querySelector('#cs1').style.display = 'block',
        document.querySelector('#cs3').style.display = 'none', document.querySelector('#cs2').style.display = 'none', random;
    } else if (random == 'scissors') {
        return document.querySelector('#cs2').style.display = 'block',
        document.querySelector('#cs3').style.display = 'none', document.querySelector('#cs1').style.display = 'none', random;
    } 

}

let oneRound = (player, computer) => {
    
    //Win solutions
    if (player == 'rock' && computer == 'scissors') {
        ++playerScore;  
       } else if (player == 'paper' && computer == 'rock') {
        ++playerScore;
    } else if (player == 'scissors' && computer == 'paper') {
        ++playerScore;
    
    //Lose solutions
    } else if (player == 'rock' && computer == 'paper') {
        ++computerScore;
        
    } else if (player == 'paper' && computer == 'scissors') {
        ++computerScore;
        
    } else if (player == 'scissors' && computer == 'rock') {
        ++computerScore;
        

    } else return "thats a tie"
}

function game(player) {
    if (playerScore < 5 && computerScore < 5) {
        let playerSelection = player;
        let computerSelection = computerPlay();
        oneRound(playerSelection,computerSelection);

    document.getElementById("punkteL").textContent = playerScore;
    document.getElementById("punkteR").textContent = computerScore;
    } else if (playerScore == 5) {
        return 
    }


}


let rockBtn = document.querySelector('#st');
let paperBtn = document.querySelector('#p');
let scissorsBtn = document.querySelector('#s');

//Event listeners for buttons, each pass their string into game(), 

paperBtn.addEventListener('click', ()=>  {
    game('paper');
    document.querySelector('#ps1').style.display = 'block';
    document.querySelector('#ps2').style.display = 'none';
    document.querySelector('#ps3').style.display = 'none';
});

scissorsBtn.addEventListener('click', ()=>  {
    game('scissors');
    document.querySelector('#ps2').style.display = 'block';
    document.querySelector('#ps1').style.display = 'none';
    document.querySelector('#ps3').style.display = 'none';
});

rockBtn.addEventListener('click', ()=>  {
    game('rock');
    document.querySelector('#ps3').style.display = 'block';
    document.querySelector('#ps2').style.display = 'none';
    document.querySelector('#ps1').style.display = 'none';
});

