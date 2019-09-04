/*
 * Method to start the clock
 * It is used to display the time taken (levels 1 - 20) or
 * the time left (levels 21 - 27) and is called in clickFunction()
 * The timer starts when the user flips a card for the first time
 * How to call: startClock();
 */
function startClock(){
    
    //Setting the timer variable using setInterval
    timer = setInterval(function(){
        clock++;
        let time = document.getElementsByClassName("time");
        
        //Showing time taken (levels 1 - 20)
        if (level <= 20)
            time[0].innerHTML = clock + " sec";
        else {
            
            //Restarting the level if the time is up (levels 21 - 27)
            if (maxTime - clock == 0) {
                window.alert("OOPS! Time Up." +
                         "\nClick OK to restart the level.");
                restart();
            }
            
            //Showing time left (levels 21 - 27)
            time[0].innerHTML = maxTime - clock + " sec left";
        }
    },1000);
}


/*
 * Method to check moves
 * It is called in clickFunction() and is used to
 * set the moves used (levels 1 - 13) or moves left (levels 14 - 20)
 * Parameter: number of moves eg. 2
 * How to call: totalMoves(move);
 */
function totalMoves(move){
    if (move % 2 == 0){
        let exactMove = move / 2;
        let moves = document.getElementsByClassName("moves");
        if (level <= 13) {
            moves[0].innerHTML = exactMove + " moves, time: ";
        } else {
            moves[0].innerHTML = maxMoves - exactMove + " moves left, time: ";
        }
    }
}


/*
 * Method for the click action of the cards
 * It is used for the click action on a card and
 * is called in startGame()
 * How to use: clickFunction();
 */
function clickFunction(){
    //Fethcing all the cards
    let card = document.getElementsByClassName("card");
    
    //Setting the event listener for all the cards
    for (var i = 0; i < card.length; i++) {
        card[i].addEventListener("click", function() {
            //Checking if the card is not open and neither matches with another card
            if (!(this.classList.contains("match") || this.classList.contains("open"))) {
                
                //Marking the card as open
                this.classList.add("open");
                this.classList.add("show");
                
                //Increasing the number of moves and starting the timer
                numOfMoves++;
                if (numOfMoves == 1){
                    startClock();
                }
                
                //Pushing the card in the open cards array
                cardsOpened.push(this);
                
                //Checking if the cards match
                if (cardsOpened.length % 2 == 0) {
                    setTimeout(checkCards, 300);
                }
            }
            totalMoves(numOfMoves);
        });
    }
}

/*
 * Method to check if the last 2 opened cards match
 * It is called when the user flips 2 cards and is called in clickFunction()
 * How to call: checkCards();
 */
function checkCards(){
    /*
     * If the cards match, mark them as matched 
     * so they cannot be flipped again
     */
    var len = cardsOpened.length;
    if (cardsOpened[len - 2].innerHTML == cardsOpened[len - 1].innerHTML) {
        //Marking previous card
        cardsOpened[len - 2].classList.remove("open");
        cardsOpened[len - 2].classList.remove("show");
        cardsOpened[len - 2].classList.add("match");
        
        //Marking the card just flipped
        cardsOpened[len - 1].classList.remove("open");
        cardsOpened[len - 1].classList.remove("show");
        cardsOpened[len - 1].classList.add("match");
    } else {
        /*
         * If the cards does not match, remove them from the open
         * cards array and turn them around so they can be opened
         * again
         */
        cardsOpened[len - 1].classList.remove("open");
        cardsOpened[len - 1].classList.remove("show");
        
        cardsOpened[len - 2].classList.remove("open");
        cardsOpened[len - 2].classList.remove("show");
        cardsOpened.pop();
        cardsOpened.pop();
    }
    
    //Checking the completion of a level or the game
    if (len == numCards) {
        clearInterval(timer);
        let exactMove = numOfMoves/2;
        let message =   "Congratulations!, You completed level " + level + ".\n" +
        "Moves taken = " + exactMove + ".\n" +
        "Time taken = " + clock + " secs.\n";
        
        //If only the level is completed.
        if (level < 27) {
            message += "Click OK to play level " + (level + 1) + ".";
            window.alert(message);
            level++;
            restart();
        } else {
            
            //If the game is completed, it will restart from level 1
            message += "You have completed all the levels.\nClick OK to restart the game.";
            window.alert(message);
            location.reload();
        }
    } else {
        
        //If the user is out of moves
        if (level > 13 && numOfMoves / 2 == maxMoves) {
            window.alert("OOPS! You're out of moves." +
                         "\nClick OK to restart the level.");
            restart();
        }
    }
}