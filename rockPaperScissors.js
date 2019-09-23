const getUserChoice = userInput => {
    if(userInput==='rock' || userInput==='paper' || userInput==='scissors' || userInput==='bomb' ){
        return userInput;
    }else{
        console.log("Invalid input:"+userInput);
    }
};

function getComputerChoice(){
    var computerChoice=(Math.floor(Math.random()*3));

    switch(computerChoice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            console.log('Problem!');
    }

}



function determineWinner(userInput,computerChoice ){
    if(userInput==='bomb'){
        return "user won";
    }
    if(computerChoice===userInput){
        return "Tie";
    }else if(userInput==='rock' && computerChoice==='scissors'){
        return "user won";
    }else if(userInput==='paper' && computerChoice==='rock'){
        return "user won";
    }else if(userInput==='scissors' && computerChoice==='paper'){
        return "user won";
    }else if(computerChoice==='rock' && userInput==='scissors'){
        return "computer  won";
    }else if(computerChoice==='paper' && userInput==='rock'){
        return "computer  won";
    }else if(computerChoice==='scissors' && userInput==='paper'){
        return "computer  won";
    }
}

function playGame(){
    var userInput="bomb";
    userInput = userInput.toLowerCase();
    userInput = getUserChoice(userInput);

    var computerChoice = getComputerChoice();
    console.log("computerChoice:"+computerChoice);
    console.log("UserChoice:"+userInput);
    console.log("determineWinner:"+determineWinner(userInput,computerChoice));
}


playGame();


