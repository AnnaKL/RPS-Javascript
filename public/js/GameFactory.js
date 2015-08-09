angular.module('rps.factory', [])

.factory('GameFactory',function() {
	var playerChoice = '';
	var computerChoice = '';
	var choices = ['paper', 'rock', 'scissors']
	var turns = 3;
	var winTurns = 0;
	var shapes = {
  paper: ['rock'],
  rock: ['scissors'],
  scissors: ['paper']
}
  var tacticalShapes = {
  paper: ['scissors'],
  rock: ['paper'],
  scissors: ['rock']
 }


    
  return {
  	playerChooses: function(choice) {
  		return playerChoice = choice;
  	},
  	computerRandomChoice: function() {
      var randomNumber = Math.random();
      if(turns !=0) {
        if(randomNumber <= 0.33) {return computerChoice = choices[0]}
        if (randomNumber <= 0.66) {return computerChoice = choices[1]}
        if (randomNumber <= 1) {return computerChoice = choices[2]}
      }
  	},
	  tacticalComputerChoice: function() {
      for(var item in tacticalShapes) {
        if(computerChoice === item) {
          return computerChoice = tacticalShapes[item][0]
        } else if (computerChoice === ''){ 
          return this.computerRandomChoice();
        }
      }
    },
	  humanVersusComputer: function() {
	    if(turns !=0) {
	      for(var key in shapes) {
	        if(playerChoice == key) {
	          if(computerChoice == shapes[key][0]) {
	            winTurns +=1;
	            turns -=1;
	            return "You won this round."
	          } else if (playerChoice == computerChoice) {
	            turns -=1
	            winTurns +=0.5;
	            return "It's a tie."
	          } else {
	            turns -=1;
	            return "You lost this round."
	          }
	        }
	      }
	    }
	  },
	  turns: function() {
	  	return turns;
	  },
	  winTurns: function() {
	  	return winTurns;
	  },
	  winner: function() {
	    if(this.turns() === 0) {
	      if(this.winTurns() > 1.5) {return "Congratulations, you've won the game."}
	      if(this.winTurns() === 1.5) {return "Game results: It's a tie"}
	      if(this.winTurns() < 1.5) {return "Ops, you've lost the game."}
	    }
	  }
	};


 });
