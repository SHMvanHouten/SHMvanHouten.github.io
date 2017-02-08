function YahtzyGame(){

	var bottomScore = 0;

	this.getBottomScore = function() {

	    return bottomScore;
	};
};

YahtzyGame.prototype.showBottomScore =  function(){
    return this.getBottomScore();
};