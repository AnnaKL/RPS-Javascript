angular.module('rps.factory', [])

.factory('GameFactory',function() {
	var playerChoice = '';
	var computerChoice = '';
	var choices = ['paper', 'rock', 'scissors', 'lizard', 'spock']
	var turns = 3;
	var winTurns = 0;
	var shapes = {
			paper: ['rock', 'spock'],
			rock: ['scissors', 'lizard'],
			scissors: ['paper', 'lizard'],
			spock: ['rock', 'scissors'],
			lizard: ['paper', 'spock']
      }
  var tacticalShapes = {
			paper: ['scissors', 'lizard'],
			rock: ['paper', 'spock'],
			scissors: ['rock', 'spock'],
			spock: ['paper', 'lizard'],
			lizard: ['rock', 'scissors']
      }


    
  return {
  	playerChooses: function(choice) {
  		return playerChoice = choice;
  	},
  	computerRandomChoice: function() {
      var randomNumber = Math.random();
      if(turns !=0) {
        if(randomNumber <= 0.2) {return computerChoice = choices[0]}
        if (randomNumber <= 0.4) {return computerChoice = choices[1]}
        if (randomNumber <= 0.6) {return computerChoice = choices[2]}
        if (randomNumber <= 0.8) {return computerChoice = choices[3]}
        if (randomNumber <= 1) {return computerChoice = choices[4]}
      }
  	},
	  tacticalComputerChoice: function() {
      for(var item in tacticalShapes) {
        if(computerChoice === item) {
        	var randomNumber = Math.random();
        	if(randomNumber <= 0.5) {return computerChoice = tacticalShapes[item][0]}
          if(randomNumber <= 1) {return computerChoice = tacticalShapes[item][1]}
        } else if (computerChoice === ''){ 
          return this.computerRandomChoice();
        }
      }
    },
	  humanVersusComputer: function() {
	    if(turns !=0) {
	      for(var key in shapes) {
	        if(playerChoice == key) {
	          if(computerChoice == shapes[key][0] || computerChoice == shapes[key][1]) {
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
	  humanVersusHuman: function(choice1, choice2) {
	  	if(turns !=0) {
	  		for(var key in shapes) {
	  		if(choice1 ==key) {
	  			if(choice2 == shapes[key][0] || choice2 == shapes[key][1]) {
	  				winTurns +=1;
	          turns -=1;
	          return "Player 1 won this round."
	  	       } else if (choice1 == choice2) {
	            turns -=1
	            winTurns +=0.5;
	            return "It's a tie."
	          } else {
	            turns -=1;
	            return "Player 2 won this round."
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
	      if(this.winTurns() === 1.5) {return "Game results: It's a tie."}
	      if(this.winTurns() < 1.5) {return "Ops, you've lost the game."}
	    }
	  },
	  playersWinner: function() {
	    if(this.turns() === 0) {
	      if(this.winTurns() > 1.5) {return "Congratulations, Player 1 won the game."}
	      if(this.winTurns() === 1.5) {return "Game results: It's a tie."}
	      if(this.winTurns() < 1.5) {return "Congratulations, Player 2 won the game."}
	    }
	  }
	};


 });
