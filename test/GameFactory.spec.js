describe('Game Factory', function(){
	var GameFactory;
	var playerChoice;
	var choices;
	var turns;
	var winTurns;
	var shapes;

	beforeEach(function(){
		module('rps.factory')
	})

	beforeEach(inject(function (_GameFactory_){
		GameFactory = _GameFactory_;
		choices = ['paper', 'rock', 'scissors'];
		turns = 3;
		winTurns = 0;
		shapes = {
		  paper: ['rock'],
		  rock: ['scissors'],
		  scissors: ['paper']
    }

	}))

	it('can get an instance of the factory', function(){
		expect(GameFactory).toBeDefined();
	});

	it('allow player to choose a shape', function() {
		expect(GameFactory.playerChooses('rock')).toEqual('rock');
	});

	it('allow computer to choose paper', function(){
		spyOn(Math, 'random').and.returnValue(0.15)
		expect(GameFactory.computerRandomChoice()).toEqual('paper')
	});

	it('allow computer to choose paper', function(){
		spyOn(Math, 'random').and.returnValue(0.60)
		expect(GameFactory.computerRandomChoice()).toEqual('rock')
	});

	it('allow computer to choose paper', function(){
		spyOn(Math, 'random').and.returnValue(0.80)
		expect(GameFactory.computerRandomChoice()).toEqual('scissors')
	});

	it('allow human player to win a round', function(){
		GameFactory.playerChooses('rock')
		spyOn(Math, 'random').and.returnValue(0.80)
		GameFactory.computerRandomChoice()
		expect(GameFactory.humanVersusComputer()).toEqual('You won this round.')
	});

});