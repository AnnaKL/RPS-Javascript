describe('Game Factory', function(){
	var GameFactory;
	var playerChoice;
	var computerChoice;
	var choices;
	var shapes;
	var tacticalShapes

	beforeEach(function(){
		module('rps.factory')
	})

	beforeEach(inject(function (_GameFactory_){
		GameFactory = _GameFactory_;
		choices = ['paper', 'rock', 'scissors', 'lizard', 'spock'];
		shapes = {
		  paper: ['rock', 'spock'],
			rock: ['scissors', 'lizard'],
			scissors: ['paper', 'lizard'],
			spock: ['rock', 'scissors'],
			lizard: ['paper', 'spock']
    }
    tacticalShapes = {
		 	paper: ['scissors', 'lizard'],
			rock: ['paper', 'spock'],
			scissors: ['rock', 'spock'],
			spock: ['paper', 'lizard'],
			lizard: ['rock', 'scissors']
    }

	}))

	it('can get an instance of the factory', function(){
		expect(GameFactory).toBeDefined();
	});

	it('allow player to choose a shape', function() {
		expect(GameFactory.playerChooses('rock')).toEqual('rock');
	});

	it('allow computer to choose paper', function(){
		spyOn(Math, 'random').and.returnValue(0.2)
		expect(GameFactory.computerRandomChoice()).toEqual('paper')
	});

	it('allow computer to choose paper', function(){
		spyOn(Math, 'random').and.returnValue(0.4)
		expect(GameFactory.computerRandomChoice()).toEqual('rock')
	});

	it('allow computer to choose paper', function(){
		spyOn(Math, 'random').and.returnValue(0.6)
		expect(GameFactory.computerRandomChoice()).toEqual('scissors')
	});

	it('allow computer to choose lizard', function(){
		spyOn(Math, 'random').and.returnValue(0.8)
		expect(GameFactory.computerRandomChoice()).toEqual('lizard')
	});

	it('allow computer to choose spock', function(){
		spyOn(Math, 'random').and.returnValue(1)
		expect(GameFactory.computerRandomChoice()).toEqual('spock')
	});

	it('allow human player to win a round', function(){
		GameFactory.playerChooses('rock')
		spyOn(Math, 'random').and.returnValue(0.6)
		GameFactory.computerRandomChoice()
		expect(GameFactory.humanVersusComputer()).toEqual('You won this round.')
	});

	it('allow computer to win a round', function(){
		GameFactory.playerChooses('rock')
		spyOn(Math, 'random').and.returnValue(0.2)
		GameFactory.computerRandomChoice()
		expect(GameFactory.humanVersusComputer()).toEqual('You lost this round.')
	});

	it('allow a tie between the human player and a computer', function(){
		GameFactory.playerChooses('rock')
		spyOn(Math, 'random').and.returnValue(0.4)
		GameFactory.computerRandomChoice()
		expect(GameFactory.humanVersusComputer()).toEqual("It's a tie.")
	});

  it('allow tactical computer to return scissors and firt choice was paper', function(){
  	spyOn(Math, 'random').and.returnValue(0.2)
  	GameFactory.playerChooses('rock')
  	GameFactory.computerRandomChoice()
  	GameFactory.playerChooses('rock')
  	expect(GameFactory.tacticalComputerChoice()).toEqual('scissors');
  });

  it('allow tactical computer to return paper and firt choice was rock', function(){
  	spyOn(Math, 'random').and.returnValue(0.4)
  	GameFactory.playerChooses('rock')
  	GameFactory.computerRandomChoice()
  	GameFactory.playerChooses('rock')
  	expect(GameFactory.tacticalComputerChoice()).toEqual('paper');
  });

  it('allow tactical computer to return spock and firt choice was scissors', function(){
  	spyOn(Math, 'random').and.returnValue(0.6)
  	GameFactory.playerChooses('rock')
  	GameFactory.computerRandomChoice()
  	GameFactory.playerChooses('rock')
  	expect(GameFactory.tacticalComputerChoice()).toEqual('spock');
  });

  it('allow human player to win the game', function(){
  	spyOn(GameFactory, 'rounds').and.returnValue(0)
  	spyOn(GameFactory, 'score').and.returnValue(2)
  	expect(GameFactory.winner()).toEqual("Congratulations, you've won the game.")
  });

  it('allow human player to loose the game', function(){
  	spyOn(GameFactory, 'rounds').and.returnValue(0)
  	spyOn(GameFactory, 'score').and.returnValue(1)
  	expect(GameFactory.winner()).toEqual("Ops, you've lost the game.")
  });

  it('allow a tie as a result of a game', function(){
  	spyOn(GameFactory, 'rounds').and.returnValue(0)
  	spyOn(GameFactory, 'score').and.returnValue(1.5)
  	expect(GameFactory.winner()).toEqual("Game results: It's a tie.")
  });

  it('allow player 1 to win a round', function(){
  	GameFactory.playerChooses('rock');
  	GameFactory.playerChooses('scissors');
  	expect(GameFactory.humanVersusHuman('rock', 'scissors')).toEqual("Player 1 won this round.")
  });

  it('allow player 1 to win a round', function(){
  	GameFactory.playerChooses('scissors');
  	GameFactory.playerChooses('rock');
  	expect(GameFactory.humanVersusHuman('scissors', 'rock')).toEqual("Player 2 won this round.")
  });

  it('allow round results to be a tie between players', function(){
  	GameFactory.playerChooses('rock');
  	GameFactory.playerChooses('rock');
  	expect(GameFactory.humanVersusHuman('rock', 'rock')).toEqual("It's a tie.")
  });

  it('allow human player 1 to win the game', function(){
  	spyOn(GameFactory, 'rounds').and.returnValue(0)
  	spyOn(GameFactory, 'score').and.returnValue(2)
  	expect(GameFactory.playersWinner()).toEqual("Congratulations, Player 1 won the game.")
  });

  it('allow human player 2 to win the game', function(){
  	spyOn(GameFactory, 'rounds').and.returnValue(0)
  	spyOn(GameFactory, 'score').and.returnValue(1)
  	expect(GameFactory.playersWinner()).toEqual("Congratulations, Player 2 won the game.")
  });

  it('allow a tie as a result of a game between to human players', function(){
  	spyOn(GameFactory, 'rounds').and.returnValue(0)
  	spyOn(GameFactory, 'score').and.returnValue(1.5)
  	expect(GameFactory.playersWinner()).toEqual("Game results: It's a tie.")
  });

});