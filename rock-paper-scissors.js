//create a function
//create a logic to get computer choice
    //get a random number
    //reduce to only three options
    //connect the result with an array
        //array may content three strings

        

function getComputerChoice(){
    const rockPaperScissor = ["rock", "paper", "scissor"]
    const random1 = Math.floor(Math.random() * rockPaperScissor.length ) 
    const elemento = rockPaperScissor[random1]
    return elemento    
}

//get user input
let answer = prompt("choose rock,paper or scissor", "paper")

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

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice){
  console.log(computerChoice)
  console.log(humanChoice)

  if (humanChoice === "rock" && computerChoice === "paper"){
    return "Bro, you suck, paper beats rock, computer wins"
  }
  else if (humanChoice === "rock" && computerChoice === "scissor"){
    return "Bro, you win!, rock beats scissor"
  }
  else if(humanChoice === "scissor" && computerChoice === "paper"){
    return "Bro, you win!, scissor beats paper"
  }
  else if(humanChoice === "scissor" && computerChoice === "rock"){
    return "Bro , you suck, rock beats scissor, computer wins"
  }
  else if(humanChoice === "paper" && computerChoice === "rock"){
    return "Bro, you win!, paper beats rock"
  }
  else if(humanChoice === "paper" && computerChoice === "scissor"){
    return "Bro , you suck, scissor beats paper, computer wins"
  }
  else if(humanChoice === computerChoice){
    return "it's a tie"
  }

  

}

console.log(playRound( getHumanChoice(), getComputerChoice()))

