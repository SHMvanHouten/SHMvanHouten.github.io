describe("YahtzyGame", function () {
	it("returns the values 2,3,4,5,1 of the five dice", function () {
		var yahtzyGame = new YahtzyGame(2, 3, 4, 5, 1);
		expect(yahtzyGame.showDice()).toEqual([1, 2, 3, 4, 5]);
	});

	it("should detect not a full house", function () {
		var yahtzyGame = new YahtzyGame(2, 3, 4, 5, 1);
		expect(yahtzyGame.isFullHouse()).toBeFalsy();

	});
	it("three-of-a-kind should not be a fullhouse", function () {
		var yahtzyGame = new YahtzyGame(1, 2, 3, 3, 3);
		expect(yahtzyGame.isFullHouse()).toBeFalsy();
	});
	it("should detect a full house", function () {
		var yahtzyGame = new YahtzyGame(2, 2, 3, 3, 3);
		expect(yahtzyGame.isFullHouse()).toBeTruthy();
	});

	it("should detect two of a kind", function () {
		var yahtzyGame = new YahtzyGame(2, 1, 4, 3, 1);
		expect(yahtzyGame.isTwoOfAKind()).toBeTruthy();
	});
	it("should detect not two of a kind", function () {
		var yahtzyGame = new YahtzyGame(2, 6, 4, 3, 1);
		expect(yahtzyGame.isTwoOfAKind()).toBeFalsy();
	});

	it("should detect three of a kind", function () {
		var game = new YahtzyGame(3, 2, 3, 1, 3);
		expect(game.isThreeOfAKind()).toBeTruthy();
	});
	it("should detect not three of a kind", function () {
		var game = new YahtzyGame(3, 2, 3, 1, 5);
		expect(game.isThreeOfAKind()).toBeFalsy();
	});
	
	it("should detect four of a kind", function () {
		var game = new YahtzyGame(3, 3, 3, 3, 2);
		expect(game.isFourOfAKind()).toBeTruthy();
	});
	it("should detect Yahtzy", function () {
		var game = new YahtzyGame(3, 3, 3, 3, 3);
		expect(game.isYahtzy()).toBeTruthy();
	});

	it("should score 25 for a fullhouse", function () {
		var game = new YahtzyGame(2, 2, 3, 3, 3);
		expect(game.getScoreAsFullHouse()).toBe(25);
	});
	it("should score 0 for not a fullhouse", function () {
		var game = new YahtzyGame(2, 2, 3, 3, 5);
		expect(game.getScoreAsFullHouse()).toBe(0);
	});
	it("should detect a small straight", function () {
		var game = new YahtzyGame(1, 2, 3, 4, 6);
		expect(game.isSmallStraight()).toBeTruthy();

		game = new YahtzyGame(2, 3, 4, 5, 5);
		expect(game.isSmallStraight()).toBeTruthy();

		game = new YahtzyGame(3, 4, 5, 6, 5);
		expect(game.isSmallStraight()).toBeTruthy();

	});

	it("should detect a large straight", function () {
		var game = new YahtzyGame(1, 2, 3, 4, 5);
		expect(game.isLargeStraight()).toBeTruthy();

	});

	it("should not give two of a kind when 6 dice are input and the last two are a pair", function () {
		var game = new YahtzyGame(1, 2, 3, 4, 5, 5);
		expect(game.isTwoOfAKind()).toBeFalsy();
	});

	it("should give a score of 18 when three of a kind is chosen", function () {
		var game = new YahtzyGame(3, 3, 3, 4, 5);
		expect(game.getScoreAsThreeOfAKind()).toEqual(18);
	});
	it("should give a score of 0 when three of a kind is chosen", function () {
		var game = new YahtzyGame(3, 3, 2, 4, 6);
		expect(game.getScoreAsThreeOfAKind()).toEqual(0);
	});
	
	it("should give a score of 13 when four of a kind is chosen", function () {
		var game = new YahtzyGame(3, 3, 3, 3, 1);
		expect(game.getScoreAsFourOfAKind()).toEqual(13);
	});
	it("should give a score of 0 when four of a kind is chosen", function () {
		var game = new YahtzyGame(3, 3, 3, 2, 1);
		expect(game.getScoreAsFourOfAKind()).toEqual(0);
	});
	
	

});
