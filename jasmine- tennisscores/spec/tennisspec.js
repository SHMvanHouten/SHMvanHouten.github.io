describe("TennisGame", function () {
    
    beforeEach(function () {
        game = new TennisGame();
    });

    it("should tell the score is love - love ", function () {
        
        expect(game.showScore()).toEqual("love - love");
    });
    it("should tell the score is 15 - love ", function () {
        game.givePointPlayerOne();
      

        expect(game.showScore()).toEqual("15 - love");
    });
    it("should tell the score is 15 - 15", function () {
         game.givePointPlayerOne();
         game.givePointPlayerTwo();


         expect(game.showScore()).toEqual("15 - 15");
    });
    it("should tell the score is Deuce", function () {
         game.givePointPlayerOne();
         game.givePointPlayerOne();
         game.givePointPlayerOne();
         game.givePointPlayerTwo();
         game.givePointPlayerTwo();
         game.givePointPlayerTwo();


         expect(game.showScore()).toEqual("Deuce");
    });


    it("should tell the score is advantage player one", function(){
        game.givePointPlayerOne();
        game.givePointPlayerOne();
        game.givePointPlayerOne();
        game.givePointPlayerTwo();
        game.givePointPlayerTwo();
        game.givePointPlayerTwo();
        game.givePointPlayerOne();

        expect(game.showScore()).toEqual("Advantage player one")
    });
    it("should tell the score is advantage player two", function(){
        game.givePointPlayerOne();
        game.givePointPlayerOne();
        game.givePointPlayerOne();
        game.givePointPlayerTwo();
        game.givePointPlayerTwo();
        game.givePointPlayerTwo();
        game.givePointPlayerTwo();

        expect(game.showScore()).toEqual("Advantage player two")
        expect(game.showDeuce()).toEqual(false)
     });
     it("should tell the score is Deuce again", function(){
        game.givePointPlayerOne();
        game.givePointPlayerOne();
        game.givePointPlayerOne();
        game.givePointPlayerTwo();
        game.givePointPlayerTwo();
        game.givePointPlayerTwo();
        game.givePointPlayerTwo();
        game.givePointPlayerOne();

        expect(game.showScore()).toEqual("Deuce")
     });
     it("should tell the score is Deuce again", function(){
            game.givePointPlayerOne();
            game.givePointPlayerOne();
            game.givePointPlayerOne();
            game.givePointPlayerTwo();
            game.givePointPlayerTwo();
            game.givePointPlayerTwo();
            game.givePointPlayerOne();
            game.givePointPlayerTwo();

            expect(game.showScore()).toEqual("Deuce")
     });
     it("should give game player one", function(){
            game.givePointPlayerOne();
            game.givePointPlayerOne();
            game.givePointPlayerOne();

            expect(game.givePointPlayerOne()).toEqual("game player one")
      });
    it("should give game player two", function(){
        game.givePointPlayerTwo();
        game.givePointPlayerTwo();
        game.givePointPlayerTwo();


        expect(game.givePointPlayerTwo()).toEqual("game player two")
    });
    it("should give game player one", function(){
            game.givePointPlayerOne();
            game.givePointPlayerOne();
            game.givePointPlayerOne();
            game.givePointPlayerTwo();
            game.givePointPlayerTwo();
            game.givePointPlayerTwo();
            game.givePointPlayerOne();

            expect(game.givePointPlayerOne()).toEqual("game player one")
            expect(game.showScore()).toEqual("love - love")
     });
    it("should give game player two", function(){

        game.givePointPlayerTwo();
        game.givePointPlayerTwo();
        game.givePointPlayerTwo();
        game.givePointPlayerOne();
        game.givePointPlayerOne();
        game.givePointPlayerOne();
        game.givePointPlayerTwo();

        expect(game.givePointPlayerTwo()).toEqual("game player two")
        expect(game.showScore()).toEqual("love - love")
    });
});

