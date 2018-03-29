

matcherModel = {

	size: 4,
	cards: [],
	cardValues: [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ],
	currentId: 1,

	selectedCard: null,

	totalCards: 0,
	numGuesses: 0,
	matchedCards: 0,
	gameStateText: "You haven't won yet, pick a pair.",


	init: function( size ) {
		this.size = size || this.size;
		var numPairs = Math.pow( this.size, 2) / 2
		for( var i = 0; i < numPairs ; i++ ) this.addPair();
		this.shuffle();
	},

	addPair: function(  ) {
		var value = this.cardValues[ Math.floor( Math.random() * this.cardValues.length)];		
		this.cards.push( new this.Card( this.getId(), value ))
		this.cards.push( new this.Card( this.getId(), value ))
		this.totalCards += 2;
	},

	shuffle: function(  ) {
		var currentIndex = this.cards.length, rand, temp;

		while( currentIndex > 1) {
			rand = Math.floor( Math.random()* currentIndex);
			currentIndex--;

			temp = this.cards[rand];
			this.cards[rand] = this.cards[ currentIndex ];
			this.cards[ currentIndex ] = temp;
		}
	},
		
	Card: function( id, value ) {
		this.id = id;
		this.value = value;
	},
	
	getId: function( args ) {
		var id = this.currentId;
		this.currentId++;
		return id;								
	},
								
	sameCard: function( id ) {
		return this.selectedCard && this.selectedCard.id === id;
	},

	getCard: function( id ) {
		for( var i = 0; i < this.cards.length ; i++ ) {
			if( this.cards[i].id === id ) return this.cards[i];
		}
		return null;			
	},
		
	setSelectedCard: function( id ) {
		this.selectedCard = this.getCard(id);
	},
		
	checkGuess: function( id ) {
		this.numGuesses++;
		var secondCard= this.getCard(id);

		var isCorrect = false;
		if( secondCard ){
			isCorrect = secondCard.value === this.selectedCard.value;
		}

		if (isCorrect) this.matchedCards += 2;
		this.selectedCard = null;

		if( this.matchedCards === this.totalCards )
			this.gameStateText = "Congratulations, you win."
	
		return isCorrect;
	},
};


