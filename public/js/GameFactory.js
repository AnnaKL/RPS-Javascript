angular.module('rps.factory', [])

.factory('GameFactory',function() {
	var playerChoice = '';
	var computerChoice = '';
	var choices = ['paper', 'rock', 'scissors', 'lizard', 'spock']
	var rounds = 3;
	var points = 0;
	var moves = {
			paper: ['rock', 'spock'],
			rock: ['scissors', 'lizard'],
			scissors: ['paper', 'lizard'],
			spock: ['rock', 'scissors'],
			lizard: ['paper', 'spock']
      }
  var tacticalMoves = {
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
			if(rounds !=0) {
				if(randomNumber <= 0.2) {return computerChoice = choices[0]}
				if (randomNumber <= 0.4) {return computerChoice = choices[1]}
				if (randomNumber <= 0.6) {return computerChoice = choices[2]}
				if (randomNumber <= 0.8) {return computerChoice = choices[3]}
				if (randomNumber <= 1) {return computerChoice = choices[4]}
			}
		},
		tacticalComputerChoice: function() {
			for(var item in tacticalMoves) {
				if(computerChoice === item) {
					var randomNumber = Math.random();
					if(randomNumber <= 0.5) {return computerChoice = tacticalMoves[item][0]}
					if(randomNumber <= 1) {return computerChoice = tacticalMoves[item][1]}
				} else if (computerChoice === ''){ 
					return this.computerRandomChoice();
				}
			}
		},
		humanVersusComputer: function() {
			if(rounds !=0) {
				for(var key in moves) {
					if(playerChoice == key) {
						if(computerChoice == moves[key][0] || computerChoice == moves[key][1]) {
							rounds -=1;
							points +=1;
							return "You won this round."
						} else if (playerChoice == computerChoice) {
							rounds -=1
							points +=0.5;
							return "It's a tie."
						} else {
							rounds -=1;
							return "You lost this round."
						}
					}
				}
			}
		},
		humanVersusHuman: function(choice1, choice2) {
			if(rounds !=0) {
				for(var key in moves) {
					if(choice1 ==key) {
						if(choice2 == moves[key][0] || choice2 == moves[key][1]) {
							rounds -=1;
							points +=1;
							return "Player 1 won this round."
						} else if (choice1 == choice2) {
							rounds -=1
							points +=0.5;
							return "It's a tie."
						} else {
							points -=1;
							return "Player 2 won this round."
						}
					}
				}
			}
		},
		rounds: function() {
			return rounds;
		},
		score: function() {
			return points;
		},
		winner: function() {
			if(this.rounds() === 0) {
				if(this.score() > 1.5) {return "Congratulations, you've won the game."}
				if(this.score() === 1.5) {return "Game results: It's a tie."}
				if(this.score() < 1.5) {return "Ops, you've lost the game."}
			}
		},
		playersWinner: function() {
			if(this.rounds() === 0) {
				if(this.score() > 1.5) {return "Congratulations, Player 1 won the game."}
				if(this.score() === 1.5) {return "Game results: It's a tie."}
				if(this.score() < 1.5) {return "Congratulations, Player 2 won the game."}
			}
		}
	};
});