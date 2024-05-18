//For saving resources rather than strings i will be using
//1=Rock
//2=Paper
//3=Scissor
//for the calculation of results

function getComputerChoice(){
    let computerChoice=Math.floor(Math.random()*3)+1;
    return computerChoice;
}//Function that returns an integer between 1 to 3 randomly(WHICH WILL BE USED FOR COMPUTER CHOICE)

function getHumanChoice(){
    let userChoice=prompt('Enter :\n1.Rock\n2.Paper\n3.Scissor\n');
    return userChoice;
}//Function to take in User Choice

function convert_string(Choice)
{
    let humanChoice=0;
    if(Choice.toLowerCase()=='rock'){
        humanChoice=1;
    }
    else if(Choice.toLowerCase()=='paper'){
        humanChoice=2;
    }
    else if(Choice.toLowerCase()=='scissor'){
        humanChoice=3;
    }
    else{
         alert('Invalid Choice');
         game_begins();
         return 0;  
    }
    return humanChoice;
}

function computerMoveDisplay(computerChoice){
    if(computerChoice==1){
        alert('Computer Chose Rock');
    }
    else if(computerChoice==2){
        alert('Computer Chose Paper');
    }
    else{
        alert('Computer Chose Scissor');
    }
}
//Function to calculate the Result and print it
function playGround(getComputerChoice,humanChoice){
    if((humanChoice==1 && getComputerChoice==3)||(humanChoice==2 && getComputerChoice==1)||(humanChoice==3 && getComputerChoice==2)){
        alert('Yay!!You win!!');
        humanScore+=1;
    }
    else if((humanChoice==2 && getComputerChoice==3)||(humanChoice==3 && getComputerChoice==1)||(humanChoice==1 && getComputerChoice==2)){
        alert("Sorry!! You Lose");
        computerScore+=1;
    }
    else{
        alert("It's a Draw"); 
    }
}
//Function to start the game
function game_begins(){
    let i=0;
    while(i!=1){
        var index=prompt("ENTER to Play\nQuit to Exit\nScore to view the Scoreboard\n");
        if(index.toLowerCase()=='score'){
            alert('SCOREBOARD : \n'+userName+' = '+humanScore+'\nComputer = '+computerScore);
            game_begins();
        }
        else if(index.toLowerCase()=='quit'){
            exit();//ends the infinite loop if user enters quit
        }
        else{
           let Choice=getHumanChoice();
           let computerChoice=getComputerChoice();
           let HumanChoice=convert_string(Choice);
           computerMoveDisplay(computerChoice);
           playGround(computerChoice,HumanChoice)
        }   
    }
}

let userName=prompt('Enter your User Name : ')
//Entering ur UserName
let humanScore=0;
let computerScore=0;
//Scores

game_begins();


