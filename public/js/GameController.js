angular.module('rps.controller', [])

.controller('GameController', ['GameFactory', function(GameFactory){

	var self = this;
	self.tab = 0;
	self.messages =[];


	self.computerVsPlayerResults = function(item) {
	  GameFactory.playerChooses(item);
	  self.computerChoice = GameFactory.computerRandomChoice();
	  self.messages.push(GameFactory.humanVersusComputer());
	  self.gameWinner = GameFactory.winner();

	};

	self.tacticalComputerVsPlayerResults = function(item) {
	  GameFactory.playerChooses(item);
	  self.computerChoice = GameFactory.tacticalComputerChoice();
	  self.messages.push(GameFactory.humanVersusComputer());
	  self.gameWinner = GameFactory.winner();

	};

	self.resetGame = function() {
	    window.location.reload()
	}



  self.setTab = function(selectedTab) {
    self.tab = selectedTab;
  };

  self.isSet = function(number) {
    return self.tab === number;
  };

}]);
