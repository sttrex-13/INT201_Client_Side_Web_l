//MUST "npm install prompt-sync" before RUN code for running code 'prompt'
//call prompt-sync by require for using prompt
const prompt = require('prompt-sync')();
 
let player1 = {};
let player2 = {};

//
function setPlayer(){ 
    let name1 = prompt('Insert Name Player1 :')
    let name2 = prompt('Insert Name Player2 :')
    player1.playerName1 = name1;
    player2.playerName2 = name2;
    return player1,player2
}
setPlayer();

let chooseTime = prompt('How many times you want to play? :');
let dice = {};
let rdDice1 = [];
let rdDice2 = [];

function randomDice(){
    
   
    for (let index = 0; index < chooseTime; index++) {
        rdDice1[index] = Math.floor((Math.random()*6) + 1);
        rdDice2[index] = Math.floor((Math.random()*6) + 1);
    }
    dice.dice1 = rdDice1;
    dice.dice2 = rdDice2;
    player1.number1 = dice.dice1;
    player2.number2 = dice.dice2;
}
randomDice();


function checkPoint(){

    let result1 = 0;
    let result2 = 0; 
    var point1 = [];
    var point2 = [];

    for (let index = 0; index < chooseTime; index++) {
    
        if(player1.number1[index] > player2.number2[index]){
            point1[index] = 'Win';
            point2[index] = 'Lose';
            result1++;
        }
        else if(player1.number1[index] < player2.number2[index]){
            point1[index] = 'Lose';
            point2[index] = 'Win';
            result2++;
        }else if(player1.number1[index] == player2.number2[index]){
            point1[index] = 'Draw';
            point2[index] = 'Draw';
        }
    }
    
    player1.PointEachRound1 = point1;
    player2.PointEachRound2 = point2;
    player1.lastResult1 = result1;
    player2.lastResult2 = result2;
}
checkPoint();

console.log(player1);
console.log(player2);

function finalResult(){
       
    if(player1.lastResult1 > player2.lastResult2){
        console.log("The winner is " + player1.playerName1);
    }
    else if(player1.lastResult1 < player2.lastResult2){
        console.log("The winner is " + player2.playerName2);
    }
    else if(player1.lastResult1 == player2.lastResult2){
        console.log("Draw")
    }else{
        console.log("Error")
    }
}
finalResult();




