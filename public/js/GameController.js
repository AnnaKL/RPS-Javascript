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

	self.playerVsPlayerResults = function(item1, item2) {
	  GameFactory.playerChooses(item1);
	  GameFactory.playerChooses(item2);
	  self.messages.push(GameFactory.humanVersusHuman(item1, item2));
	  self.gameWinner = GameFactory.playersWinner();

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
