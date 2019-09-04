/* 
 * Method to Restart the game.
 * It is used to restart the level
 * It is called when the user taps on the restart button
 * How to call: restart();
 */
function restart(){
    //Setting music off on the start of the game
    var sound = document.getElementsByTagName("audio");
    sound[0].pause;
    
    //Setting the variables to default
    numOfMoves = 0;
    clock = 0;
    cardsOpened = [];
    clearInterval(timer);
    
    //Removing all the cards from the board
    var card = document.getElementsByClassName("card");   //array of objects
    while(card.length > 0){
       card[0].parentNode.removeChild(card[0]);
    }
    totalMoves(numOfMoves);
    
    //Calling the method to start the game
    startGame();
}

/*
 * Method to start the Game
 * It is used to start the game from scratch or start a new level
 * How to call: startGame();
 */
function startGame(){
    
    //Setting the heading according to level
    var heading = document.getElementById("heading");
    heading.innerHTML = "Memory Matching Game - Level " + level;
    
    let time = document.getElementsByClassName("time");
    time[0].innerHTML = clock + " sec"
    
    //Setting the number of cards according to the level (for levels 1 - 13)
    numCards = (level + 1) * 2;
    
    //From level 14 - 20, limited moves are there
    if (level > 13) {
        numCards = (level - 6) * 2;
        maxMoves = (numCards / 2 ) + 8;
        if (level > 20) {
            
            //From level 21 - 27, even less moves are there
            numCards = (level - 13) * 2;
            maxMoves = (numCards / 2) + 6;
        }
        
        //Setting the text for moves
        let moves = document.getElementsByClassName("moves");
        moves[0].innerHTML = maxMoves + " moves left, time: ";
    }
    
    //From level 21 - 27, time boundation is there
    if (level > 20) {
        maxTime = numCards + 10;
        
        //Setting the text for time
        let time = document.getElementsByClassName("time");
        time[0].innerHTML = maxTime + " sec left";
    }
    
    /* 
     * Creating the array of cards for the level using
     * the data i.e. the array of the images
     */
    var j = 0;
    for (var i = 0; i < numCards; i = i + 2) {
        cardArray[i] = cardsArray[j];
        cardArray[i + 1] = cardsArray[j];
        j++;
    }
    
    //Shuffling the array to place the cards randomly on the board
    let newcards = shuffleArray(cardArray);
    
    //Removing the cards if there are any on the board
    let board = document.getElementsByClassName("board");
    var card = document.getElementsByClassName("card");
    while(card.length > 0){
       card[0].parentNode.removeChild(card[0]);
    }
    
    //Placing the cards on the board
    for(let i = 0; i < numCards; i++){
        board[0].innerHTML+= '<li class="card"></li>';
    }
    let list = document.getElementsByClassName("card");
    for(let i=0;i<numCards;i++){
        list[i].innerHTML += '<img src="images/' + newcards[i] + '">';
    }
    
    //Calling the method for the click action on cards
    clickFunction();
}
