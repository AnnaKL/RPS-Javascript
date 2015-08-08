angular.module('rps.factory', [])

 .factory('GameFactory',function() {
 	var playerChoice = '';
 	var computerChoice = '';
 	var choices = ['paper', 'rock', 'scissors']
 	var turns = 3;


    
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
      }
  	};
 });
