//create a function
//create a logic to get computer choice
    //get a random number
    //reduce to only three options
    //connect the result with an array
        //array may content three strings

winner = document.querySelector("#resultado")
pcResponse = document.querySelector("#pcResponse")
humanResponse = document.querySelector("#humanResponse")
buttons = document.querySelectorAll('button')
rock = document.querySelector("#rock")
paper = document.querySelector("#paper")
scissors = document.querySelector("#scissors")

posibleAnswers = ["rock" , "paper", "scissor"]
rock.addEventListener('click', function result(){
  if(computerScore + humanScore >= 5){
    buttons.disabled = true
    if(computerScore < humanScore){
      alert("Bro you win this game, reload to start again")
    }
    else if(computerScore > humanScore){
      alert("Bro you lose, go ahead restart and regain your dignity")
    }
  }
  else{
    winner.textContent = playRound(posibleAnswers[0], getComputerChoice())
    pcResponse.textContent = `${computerScore} :PC Score`
    humanResponse.textContent = `${humanScore} :Human Score`
  }
})
paper.addEventListener('click', function result(){
  if(computerScore + humanScore >= 5){
    buttons.disabled = true
    if(computerScore < humanScore){
      alert("bro you win this game, reload to start again")
    }
    else if(computerScore > humanScore){
      alert("Bro you lose, go ahead restart and regain your dignity")
    }
  }
  else{
    winner.textContent = playRound(posibleAnswers[1], getComputerChoice())
    pcResponse.textContent = `${computerScore} :PC Score`
    humanResponse.textContent = `${humanScore} :Human Score`
      }
})
scissors.addEventListener('click', function result(){
  if(computerScore + humanScore >= 5){
    buttons.disabled = true
    if(computerScore < humanScore){
      alert("bro you win this game, reload to start again")
    }
    else if(computerScore > humanScore){
      alert("Bro you lose, go ahead restart and regain your dignity")
    }  
  }
  
  else{
    winner.textContent = playRound(posibleAnswers[2], getComputerChoice())
    pcResponse.textContent = `${computerScore} :PC Score`
    humanResponse.textContent = `${humanScore} :Human Score`
  }
})
function fiveRounds(){
  if(computerScore + humanScore <= 5){}
}

function getComputerChoice(){
    const rockPaperScissor = ["rock", "paper", "scissor"]
    const random1 = Math.floor(Math.random() * rockPaperScissor.length ) 
    const elemento = rockPaperScissor[random1]
    return elemento    
}

//get user input
//let answer = prompt("choose rock,paper or scissor", "rock")

function getHumanChoice(){
  const posibleAnswer = ["rock" , "paper" , "scissor"]
  if(answer === posibleAnswer[0]){
    return posibleAnswer[0]
  }
  else if(answer === posibleAnswer[1]){
    return posibleAnswer[1]
  }
  else if(answer === posibleAnswer[2]){
    return posibleAnswer[2]   
  }
  else {
    alert("write exactly as is write in the text");
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
  console.log(humanChoice)
  console.log(computerChoice)
        if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore += 1;
        return "Bro, you suck, paper beats rock, computer wins"
      }
      else if (humanChoice === "rock" && computerChoice === "scissor"){
        humanScore += 1;
        return "Bro, you win!, rock beats scissor"
      }
      else if(humanChoice === "scissor" && computerChoice === "paper"){
        humanScore += 1;
        return "Bro, you win!, scissor beats paper"
      }
      else if(humanChoice === "scissor" && computerChoice === "rock"){
        computerScore += 1;
        return "Bro , you suck, rock beats scissor, computer wins"
      }
      else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore += 1;
        return "Bro, you win!, paper beats rock"
      }
      else if(humanChoice === "paper" && computerChoice === "scissor"){
        computerScore += 1;
        return "Bro , you suck, scissor beats paper, computer wins"
      }
      else if(humanChoice === computerChoice){
        return "it's a tie"
      }
    }

  /*function playGame(){
    let rounds = 0
    let numbersRounds = true;
    console.log("hello")
    while(numbersRounds){
      console.log("hello")
      const playRounds = playRound(getHumanChoice(), getComputerChoice())
       rounds += 1;  
       if (rounds >= 5){
        numbersRounds = false
       }
       return playRounds
       
    }
  }
  */



//console.log(playRound(getHumanChoice(), getComputerChoice()))
//console.log(computerScore + " pcScore")
//console.log(humanScore + " humanScore")
//console.log(playGame())