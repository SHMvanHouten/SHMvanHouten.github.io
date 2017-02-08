
function YahtzyGame(die0, die1 ,die2, die3, die4) {
    var dice = [die0, die1, die2, die3, die4].sort();

    var contains = function(x) {
        return dice.indexOf(x) >= 0;
    };


    var countTheEyes = function(){
        var eyeCounter = [0,0,0,0,0,0];
        for (var i = 0 ; i< dice.length; i++){
            eyeCounter[dice[i]-1]++;
        }
        return eyeCounter;
    };
    var hasXOfAKind= function(x){
        var eyeCounter = countTheEyes();

        for (var j = 0 ; j<eyeCounter.length; j++) {
            if (eyeCounter[j] >=x){
                return true;
            }
        }
        return false;
    };
    var getFullHouseScore = function(){

    };
    this.getDice = function() {
        return dice
    };
    this.isTwoOfAKind = function(){
        return hasXOfAKind(2);
    };
    this.isThreeOfAKind = function(){
        return hasXOfAKind(3);
    };
    this.isFourOfAKind = function(){
        return hasXOfAKind(4);
    };
    this.isYahtzy = function(){
        return hasXOfAKind(5);
    };
    this.isFullHouse = function(){
        var eyeCounter = countTheEyes();

        return (eyeCounter.indexOf(2) > 0) && (eyeCounter.indexOf(3) > 0);

    };

    var checkConsecutiveNumbersStartingFromX = function(x, y) {
        var consecutive = true;
        var i = 0;
        while (consecutive && i < y) {
            consecutive = contains(x + i);
            i++;
        }
        return consecutive;

    };

    var containsFourConsecutiveNumberStartingFromX = function(x) {
        return checkConsecutiveNumbersStartingFromX(x, 4);
    };
    var containsFiveConsecutiveNumberStartingFromX = function(x) {
        return checkConsecutiveNumbersStartingFromX(x, 5);
    };

    this.isSmallStraight = function() {
        return containsFourConsecutiveNumberStartingFromX(1) ||
            containsFourConsecutiveNumberStartingFromX(2) ||
            containsFourConsecutiveNumberStartingFromX(3);
    };
    this.isLargeStraight = function () {
        return containsFiveConsecutiveNumberStartingFromX(1) ||
         containsFiveConsecutiveNumberStartingFromX(2);
    };

    this.getScoreAsFullHouse = function(){

        if (this.isFullHouse()){
            return 25;
        }
        else {
            return 0;
        }
    };

	this.giveScoreAsXOfAKind = function() {
		var diceTotal = 0;
			for (var i = 0; i < dice.length; i++){
			diceTotal = diceTotal + dice[i];			
			};
		return diceTotal;
	};
};

YahtzyGame.prototype.showDice = function() {
    return this.getDice();
};
//YahtzyGame.prototype.isTwoOfAKind = function() {
//    return this.isTwoOfAKind();
//};
YahtzyGame.prototype.isThreeOfAKind = function() {
    return this.isThreeOfAKind();
};
YahtzyGame.prototype.isFourOfAKind = function() {
    return this.isFourOfAKind();
};
YahtzyGame.prototype.isYahtzy = function() {
    return this.isYahtzy();
};
YahtzyGame.prototype.isFullHouse = function() {
    return this.isFullHouse();
};
YahtzyGame.prototype.getScoreAsFullHouse = function() {
    return this.getScoreAsFullHouse();
};
YahtzyGame.prototype.isSmallStraight = function() {
    return this.isSmallStraight();
};
YahtzyGame.prototype.isLargeStraight = function() {
    return this.isLargeStraight();
};
YahtzyGame.prototype.getScoreAsThreeOfAKind = function(){
	if(this.isThreeOfAKind()){
	return this.giveScoreAsXOfAKind();
	} else{return 0};
};
YahtzyGame.prototype.getScoreAsFourOfAKind = function(){
	if(this.isFourOfAKind()){
	return this.giveScoreAsXOfAKind();
	} else{return 0};
};
