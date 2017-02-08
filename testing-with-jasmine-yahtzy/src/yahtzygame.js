function YahtzyGame(){

    var bottomHalfScore = 0
    var topHalfScore = 0
    var topHalfScoreBeforeBonus = 0
    var totalScore = 0

    this.getBottomHalfScore = function(){
        return bottomHalfScore;
    };

    this.getTotalScore = function(){
        return totalScore;
    };


    this.addToBottomHalfScore = function(amount){
        bottomHalfScore = bottomHalfScore + amount;
        totalScore = totalScore + amount;
    };
};

YahtzyGame.prototype.showBottomHalfScore =  function(){
    return this.getBottomHalfScore();
};
YahtzyGame.prototype.addToBottomHalfScore = function(){
    return this.addToBottomHalfScore();
};
YahtzyGame.prototype.showTotalScore =  function(){
    return this.getTotalScore();
};