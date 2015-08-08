describe('Game Factory', function(){
	var GameFactory;
	var playerChoice;
	var choices;
	var turns;

	beforeEach(function(){
		module('rps.factory')
	})

	beforeEach(inject(function (_GameFactory_){
		GameFactory = _GameFactory_;
		choices = ['paper', 'rock', 'scissors'];
		turns = 3;

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

});