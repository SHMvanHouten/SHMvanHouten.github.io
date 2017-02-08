describe("ΥahtzyGame", function(){

	it("gives the bottom half score", function() {
	    scoreCheck = new YahtzyScoreCheck(2,2,2,3,3);
	    game = new YahtzyGame();
        scoreCheck.getScoreAsFullHouse();
        expect(game.showBottomHalfScore()).toEqual(25);
	})

   it("gives the total score", function() {
	    scoreCheck = new YahtzyScoreCheck(2,2,2,3,3);
	    game = new YahtzyGame();
        scoreCheck.getScoreAsFullHouse();
        expect(game.showTotalScore()).toEqual(25);
	})


});
