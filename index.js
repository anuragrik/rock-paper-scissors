let game=["rock", "paper","scissor"]
let isAlive=true
let outcome=document.getElementById("outcome")
let outcomeDetail=document.getElementById("outcome-detail")
let scorePlayer=document.getElementById("score-player")
let scoreComputer=document.getElementById("score-computer")
scorePlayer.textContent+=" "+0
scoreComputer.textContent+=" "+0
let countPlayer=0, countComputer=0
let compChoice
let playerImg= document.getElementById("player-img")
let computerImg= document.getElementById("computer-img")
function rockClick(){
    if(isAlive===true){
        playerImg.innerHTML="<img class=\"choice-img\" src=\"images\\rock.png\" alt=\"Your choice\">"
        compChoice=Math.floor(Math.random()*3)
        if(game[compChoice]==="rock"){
            computerImg.innerHTML="<img class=\"choice-img\" src=\"images\\rock.png\" alt=\"Computer's choice\">"
            outcomeDetail.textContent="Rock ties with rock"
            outcome.textContent="It's a tie!"
        }else if(game[compChoice]==="paper"){
            computerImg.innerHTML="<img class=\"choice-img\" src=\"images\\paper.png\" alt=\"Computer's choice\">"
            outcomeDetail.textContent="Rock is beaten by paper"
            outcome.textContent="You lost!"
            countComputer++
            scoreComputer.textContent= "Computer: "+countComputer
        }else{
            computerImg.innerHTML="<img class=\"choice-img\" src=\"images\\scissor.png\" alt=\"Computer's choice\">"
            outcomeDetail.textContent="Rock beats scissors"
            outcome.textContent="You won!"
            countPlayer++
            scorePlayer.textContent= "Player: "+countPlayer
        }
        winCheck()
    }else{
        alert("Click on New Game")
    }
}
function paperClick(){
    if(isAlive===true){
        playerImg.innerHTML="<img class=\"choice-img\" src=\"images\\paper.png\" alt=\"Your choice\">"
        compChoice=Math.floor(Math.random()*3)
        if(game[compChoice]==="paper"){
            computerImg.innerHTML="<img class=\"choice-img\" src=\"images\\paper.png\" alt=\"Computer's choice\">"
            outcomeDetail.textContent="Paper ties with paper"
            outcome.textContent="It's a tie!"
        }else if(game[compChoice]==="scissor"){
            computerImg.innerHTML="<img class=\"choice-img\" src=\"images\\scissor.png\" alt=\"Computer's choice\">"
            outcomeDetail.textContent="Paper is beaten by scissor"
            outcome.textContent="You lost!"
            countComputer++
            scoreComputer.textContent= "Computer: "+countComputer
        }else{
            computerImg.innerHTML="<img class=\"choice-img\" src=\"images\\rock.png\" alt=\"Computer's choice\">"
            outcomeDetail.textContent="Paper beats rock"
            outcome.textContent="You won!"
            countPlayer++
            scorePlayer.textContent= "Player: "+countPlayer
        }
        winCheck()
    }else{
        alert("Click on New Game")
    }
}
function scissorClick(){
    if(isAlive===true){
        playerImg.innerHTML="<img class=\"choice-img\" src=\"images\\scissor.png\" alt=\"Your choice\">"
        compChoice=Math.floor(Math.random()*3)
        if(game[compChoice]==="scissor"){
            computerImg.innerHTML="<img class=\"choice-img\" src=\"images\\scissor.png\" alt=\"Computer's choice\">"
            outcomeDetail.textContent="Scissor ties with scissor"
            outcome.textContent="It's a tie!"
        }else if(game[compChoice]==="rock"){
            computerImg.innerHTML="<img class=\"choice-img\" src=\"images\\rock.png\" alt=\"Computer's choice\">"
            outcomeDetail.textContent="Scissor is beaten by rock"
            outcome.textContent="You lost!"
            countComputer++
            scoreComputer.textContent= "Computer: "+countComputer
        }else{
            computerImg.innerHTML="<img class=\"choice-img\" src=\"images\\paper.png\" alt=\"Computer's choice\">"
            outcomeDetail.textContent="Scissor beats paper"
            outcome.textContent="You won!"
            countPlayer++
            scorePlayer.textContent= "Player: "+countPlayer
        }
        winCheck()
    }else{
        alert("Click on New Game")
    }
}
function winCheck(){
    if(countComputer===5){
        outcome.textContent="You were beaten by the computer!"
        newGame()
    }else if(countPlayer===5){
        outcome.textContent="You won against the computer!"
        newGame()
    }
}
function newGame(){
    isAlive=false
}
function startGame(){
    isAlive=true
    countComputer=0
    countPlayer=0
    scorePlayer.textContent= "Player: "+countPlayer
    scoreComputer.textContent= "Computer: "+countComputer
    outcomeDetail.textContent=""
    outcome.textContent=""
}
