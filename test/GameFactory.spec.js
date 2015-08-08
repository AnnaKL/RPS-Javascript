describe('Game Factory', function(){
	var GameFactory

	beforeEach(function(){
		module('rps.factory')
	})

	beforeEach(inject(function (_GameFactory_){
		GameFactory = _GameFactory_;
	}))

	it('can get an instance of the factory', function(){
		expect(GameFactory).toBeDefined();
	});

});