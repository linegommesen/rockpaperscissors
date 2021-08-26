"use strict";

window.addEventListener("DOMContentLoaded", start);
let rock = 1;
let paper = 2;
let scissors = 3;
let computerChoice;
let userChoice;
let winner;

function start() {
    console.log("start");
    //The user clicks a button.
    document.querySelector(".rock").addEventListener("click", getPlayerChoice);
    document.querySelector(".paper").addEventListener("click", getPlayerChoice);
    document.querySelector(".scissors").addEventListener("click", getPlayerChoice);

    //Hide winner-, loser- and drawscreen.
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");

    //Make the hands into rocks when the game starts. 
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.remove("paper");
    document.querySelector("#player1").classList.remove("scissors");
    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.remove("paper");
    document.querySelector("#player2").classList.remove("scissors");

    //Reset userchoice and computerchoice.
    computerChoice=0;
    userChoice=0;
    console.log(userChoice);
    console.log(computerChoice);
} 

//The user clicks a button and sets the value of userChoice. 
function getPlayerChoice() {
    console.log("getPlayerChoice");
   if(this.classList.contains("rock")){
userChoice=1;
   }else if(this.classList.contains("paper")){
       userChoice=2;
   }else{
       userChoice=3;
   }

   console.log(userChoice);
   makeComputerChoice();
}

//The computer generates a random number from 1-3.
function makeComputerChoice() {
    console.log("Computer choice");
    computerChoice = Math.floor(Math.random() *3) +1;
    console.log(computerChoice);
    showAnimations();
}

//Shake animations begin.
function showAnimations() {
    console.log("show animations");
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");
    //When the animation ends, the hands should change forms -> showHands.
    document.querySelector("#player1").addEventListener("animationend", showHands);
}
//The proper class is added to show what the user and computer chose.
function showHands(){
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player2").classList.remove("shake");

    if(userChoice==1){
    document.querySelector("#player1").classList.add("rock");
    }else if(userChoice==2){
        document.querySelector("#player1").classList.add("paper");
    }else{
        document.querySelector("#player1").classList.add("scissors");
    }

    if(computerChoice==1){
        document.querySelector("#player2").classList.add(".player.rock");
        }else if(computerChoice==2){
            document.querySelector("#player2").classList.add("paper");
        }else{
            document.querySelector("#player2").classList.add("scissors");
        }
        determineWinner();
}

//Compares the userChoice with computerChoice and determines a winner. 
function determineWinner() {
    console.log("determine winner");
    if(userChoice===1){
        if(computerChoice===3){
            showWin();
        }else if(computerChoice===1){
            showTie();
        }else{
            showLose();
        }
    }else if(userChoice===2){
        if(computerChoice===1){
            showWin();
        }else if(computerChoice===2){
            showTie();
        }else{
            showLose();
        }
    }else{
        if(computerChoice===2){
            showWin();
        }else if(computerChoice===3){
            showTie();
        }else{
            showLose();
        }
    }

}

//If the user wins -> goes back to start after 3sec.
function showWin() {
    console.log("win");
    document.querySelector("#win").classList.remove("hidden");
    setTimeout(start, 3000);
}
//If the user loses -> goes back to start after 3sec.
function showLose() {
    console.log("lose");
    document.querySelector("#lose").classList.remove("hidden");
    setTimeout(start, 3000);
}
//If it's a tie -> goes back to start after 3sec.
function showTie() {
    console.log("tie");
    document.querySelector("#draw").classList.remove("hidden");
    setTimeout(start, 3000);
}