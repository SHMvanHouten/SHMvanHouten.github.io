function TennisGame() {

    var scorePlayerOne = 0;
    var scorePlayerTwo = 0;
    var tennisScores = ["love","15","30","40"];
    var deuce = false;
    var advantagePlayerOne = false;
    var advantagePlayerTwo = false;



    this.addPointPlayerOne = function() {
        return scorePlayerOne ++;
    };

    this.addPointPlayerTwo = function() {
        return scorePlayerTwo ++;
    };

    this.getScorePlayerOne = function getScorePlayerOne() {
        return tennisScores[scorePlayerOne];
    }
    this.getScorePlayerTwo = function getScorePlayerTwo() {
        return tennisScores[scorePlayerTwo];
    };

    this.makeDeuce =  function(){
         return advantagePlayerOne = false, advantagePlayerTwo = false, scorePlayerOne = 0, scorePlayerTwo = 0, deuce = true;
    };

    this.showDeuce = function(){

       return deuce;

    };

    this.giveAdvantagePlayerOne = function(){
        return deuce = false, advantagePlayerOne = true;
    };

    this.giveAdvantagePlayerTwo = function(){
       return deuce = false , advantagePlayerTwo = true;
    };

    this.showAdvantagePlayerOne = function(){

       return advantagePlayerOne;
    };

    this.showAdvantagePlayerTwo = function(){

      return advantagePlayerTwo;
    };
    this.giveGamePlayerOne = function(){
        scorePlayerOne = 0;
        scorePlayerTwo = 0;
        deuce = false;
        advantagePlayerOne = false;
        advantagePlayerTwo = false;
        return console.log("game player one"), "game player one";
    }
    this.giveGamePlayerTwo = function(){
        scorePlayerOne = 0;
        scorePlayerTwo = 0;
        deuce = false;
        advantagePlayerOne = false;
        advantagePlayerTwo = false;
        return console.log("game player two"), "game player two";
    }

};


TennisGame.prototype.showScore = function() {
    if (this.showDeuce()) {
        return "Deuce";
    }
    else if (this.showAdvantagePlayerOne()){
        return "Advantage player one";
    }
    else if (this.showAdvantagePlayerTwo()){
        return "Advantage player two";
    }
    else {
    return this.getScorePlayerOne() + " - " + this.getScorePlayerTwo();
    }
};

TennisGame.prototype.givePointPlayerOne = function() {
    if (this.showDeuce()){
        return this.giveAdvantagePlayerOne();
    }
    else if((this.getScorePlayerOne() == "30")&&(this.getScorePlayerTwo() == "40")){
        return this.makeDeuce();
    }
    else if(this.getScorePlayerOne() == "40"){
        return this.giveGamePlayerOne();
    }
    else if(this.showAdvantagePlayerTwo()){
        return this.makeDeuce();
    }
    else if(this.showAdvantagePlayerOne()){
        return this.giveGamePlayerOne();
    }
    else{
        return this.addPointPlayerOne();
    }
};
TennisGame.prototype.givePointPlayerTwo = function() {
    if (this.showDeuce()){
        return this.giveAdvantagePlayerTwo();
    }
    else if((this.getScorePlayerOne() == "40")&&(this.getScorePlayerTwo() == "30")){
        return this.makeDeuce();
    }
    else if(this.getScorePlayerTwo() == "40"){
        return this.giveGamePlayerTwo();
    }
    else if(this.showAdvantagePlayerTwo()){
        return this.giveGamePlayerTwo();
    }
     else if(this.showAdvantagePlayerOne()){
        return this.makeDeuce();
    }
    else{
        return this.addPointPlayerTwo();
    };
};
