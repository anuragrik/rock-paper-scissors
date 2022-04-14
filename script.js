/*let list=[1,0,0];
list[0]+=1;
console.log(list)*/

let score=[0,0,0]; //user,computer,draw
let eventArr=["ROCK","PAPER","SCISSOR"]; //used for comp output
function computerOutput(arr){
    let randomIndex= Math.floor(Math.random()*3);
    let computerOutputVal= arr[randomIndex];
    console.log(computerOutputVal);
    return computerOutputVal;
}
let roundResult=document.querySelector('.roundResult')
let roundScore=document.querySelector('.roundScore')
let finalResult=document.querySelector('.finalResult')
let userInputButton=document.querySelectorAll('button');
userInputButton.forEach(e =>{
    e.addEventListener("click",()=>{
        let aioutput=computerOutput(eventArr);
        if(aioutput==userInput(e.textContent)){
            score[2]+=1;
            roundResult.textContent=`It is a draw. ${aioutput} draws ${userInput(e.textContent)}`
            roundScore.textContent=`Your score is ${score[0]} while computer score is ${score[1]}`
            console.log(score);
            checkWinner();
        }else if(aioutput=="ROCK" && userInput(e.textContent)=="PAPER" ||aioutput=="paper" && userInput(e.textContent)=="SCISSOR"){
            score[0]+=1;
            roundResult.textContent=`It is a win. ${aioutput} loses to ${userInput(e.textContent)}`
            roundScore.textContent=`Your score is ${score[0]} while computer score is ${score[1]}`
            console.log(score);
            checkWinner();
        }else if(aioutput=="PAPER" && userInput(e.textContent)=="ROCK" ||aioutput=="SCISSOR" && userInput(e.textContent)=="PAPER"){
            score[1]+=1;
            roundResult.textContent=`It is a loss. ${aioutput} wins against ${userInput(e.textContent)}`
            roundScore.textContent=`Your score is ${score[0]} while computer score is ${score[1]}`
            console.log(score);
            checkWinner();
        }else if(aioutput=="ROCK" && userInput(e.textContent)=="SCISSOR"){
            score[1]+=1;
            roundResult.textContent=`It is a loss. ${aioutput} wins against ${userInput(e.textContent)}`
            roundScore.textContent=`Your score is ${score[0]} while computer score is ${score[1]}`
            console.log(score);
            checkWinner();
        }else if(aioutput=="SCISSOR" && userInput(e.textContent)=="ROCK"){
            score[0]+=1;
            roundResult.textContent=`It is a win. ${aioutput} loses to ${userInput(e.textContent)}`
            roundScore.textContent=`Your score is ${score[0]} while computer score is ${score[1]}`
            console.log(score);
            checkWinner();
    }
    
})})

function userInput(content){
    content=content.toString().toUpperCase();
    return content
}
function checkWinner(){
if(score[0]==5){
    finalResult.textContent="YOU WIN!!";
    score=[0,0,0];
}else if(score[1]==5){
    finalResult.textContent="YOU LOSE!!";
    score=[0,0,0];
}else if(score[2]==5){
    finalResult.textContent="You have DRAWN the game against the computer!!";
    score=[0,0,0];
}}