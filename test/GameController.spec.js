describe('Game Controller', function(){
	var control;
	var GameFactoryMock;


	beforeEach(module('rps.controller', function(){
	}));

	beforeEach(inject(function($controller){
    	GameFactoryMock = jasmine.createSpyObj('GameFactory', ['playerChooses', 'computerRandomChoice', 'tacticalComputerChoice', 'humanVersusComputer', 'winner'])
		  control = $controller('GameController', {GameFactory: GameFactoryMock});
	 }));


  it("should have a Game Factory defined", function() {
    expect(GameFactoryMock).toBeDefined();
	});

	it('can set a tab to particular number', function(){
    control.setTab(1);
    expect(control.tab).toEqual(1);
  });



});