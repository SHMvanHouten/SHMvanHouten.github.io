describe("ΥahtzyGame", function(){
	beforeEach(function(){
	});

	it("gives a bottom score", function() {
	    function StartGame(){
	    var yahtzyScoreCheck = new YahtzyScoreCheck(0,0,0,0,0);
	    return new YahtzyGame;
	    };
        game = new StartGame();
        game.yahtzyScoreCheck(2,2,2,3,3);
        expect(game.getBottomScore()).toEqual(0);
	})

});
