// describe('Game Factory', function(){
// 	var GameFactory;
// 	var playerChoice;
// 	var computerChoice;
// 	var choices;
// 	var turns;
// 	var winTurns;
// 	var shapes;
// 	var tacticalShapes

// 	beforeEach(function(){
// 		module('rps.factory')
// 	})

// 	beforeEach(inject(function (_GameFactory_){
// 		GameFactory = _GameFactory_;
// 		choices = ['paper', 'rock', 'scissors'];
// 		shapes = {
// 		  paper: ['rock'],
// 		  rock: ['scissors'],
// 		  scissors: ['paper']
//     }
//     tacticalShapes = {
// 		  paper: ['scissors'],
// 		  rock: ['paper'],
// 		  scissors: ['rock']
//     }

// 	}))

// 	it('can get an instance of the factory', function(){
// 		expect(GameFactory).toBeDefined();
// 	});

// 	it('allow player to choose a shape', function() {
// 		expect(GameFactory.playerChooses('rock')).toEqual('rock');
// 	});

// 	it('allow computer to choose paper', function(){
// 		spyOn(Math, 'random').and.returnValue(0.15)
// 		expect(GameFactory.computerRandomChoice()).toEqual('paper')
// 	});

// 	it('allow computer to choose paper', function(){
// 		spyOn(Math, 'random').and.returnValue(0.60)
// 		expect(GameFactory.computerRandomChoice()).toEqual('rock')
// 	});

// 	it('allow computer to choose paper', function(){
// 		spyOn(Math, 'random').and.returnValue(0.80)
// 		expect(GameFactory.computerRandomChoice()).toEqual('scissors')
// 	});

// 	it('allow human player to win a round', function(){
// 		GameFactory.playerChooses('rock')
// 		spyOn(Math, 'random').and.returnValue(0.80)
// 		GameFactory.computerRandomChoice()
// 		expect(GameFactory.humanVersusComputer()).toEqual('You won this round.')
// 	});

// 	it('allow computer to win a round', function(){
// 		GameFactory.playerChooses('rock')
// 		spyOn(Math, 'random').and.returnValue(0.15)
// 		GameFactory.computerRandomChoice()
// 		expect(GameFactory.humanVersusComputer()).toEqual('You lost this round.')
// 	});

// 	it('allow a tie between the human player and a computer', function(){
// 		GameFactory.playerChooses('rock')
// 		spyOn(Math, 'random').and.returnValue(0.60)
// 		GameFactory.computerRandomChoice()
// 		expect(GameFactory.humanVersusComputer()).toEqual("It's a tie.")
// 	});

//   it('allow tactical computer to return scissors and firt choice was paper', function(){
//   	spyOn(Math, 'random').and.returnValue(0.15)
//   	GameFactory.playerChooses('rock')
//   	GameFactory.computerRandomChoice()
//   	GameFactory.playerChooses('rock')
//   	expect(GameFactory.tacticalComputerChoice()).toEqual('scissors');
//   });

//   it('allow tactical computer to return paper and firt choice was rock', function(){
//   	spyOn(Math, 'random').and.returnValue(0.60)
//   	GameFactory.playerChooses('rock')
//   	GameFactory.computerRandomChoice()
//   	GameFactory.playerChooses('rock')
//   	expect(GameFactory.tacticalComputerChoice()).toEqual('paper');
//   });

//   it('allow tactical computer to return rock and firt choice was scissors', function(){
//   	spyOn(Math, 'random').and.returnValue(0.80)
//   	GameFactory.playerChooses('rock')
//   	GameFactory.computerRandomChoice()
//   	GameFactory.playerChooses('rock')
//   	expect(GameFactory.tacticalComputerChoice()).toEqual('rock');
//   });

// });