describe('Game Controller', function(){
	var control;
	var GameFactoryMock;


	beforeEach(module('rps.controller', function(){
	}));

	beforeEach(inject(function($controller){
    	GameFactoryMock = jasmine.createSpyObj('GameFactory', ['playerChooses', 'computerRandomChoice', 'tacticalComputerChoice', 'humanVersusComputer', 'humanVersusHuman', 'winner', 'playersWinner'])
		  control = $controller('GameController', {GameFactory: GameFactoryMock});
	 }));


  it('should have a Game Factory defined', function() {
    expect(GameFactoryMock).toBeDefined();
	});

	it('can set a tab to particular number', function(){
    control.setTab(1);
    expect(control.tab).toEqual(1);
  });

  it('return true if tab is set to particular number', function(){
    control.setTab(1);
    expect(control.isSet(1)).toEqual(true);
  });

  it('return false if tab is not set to particular number', function(){
    control.setTab(2);
    expect(control.isSet(1)).toEqual(false);
  });



});