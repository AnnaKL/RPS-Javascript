angular.module('rps.factory', [])

 .factory('GameFactory',function() {
 	var playerChoice = '';


    
  return {
  	playerChooses: function(choice) {
  		return playerChoice = choice;
  	  }
  	};
 });
