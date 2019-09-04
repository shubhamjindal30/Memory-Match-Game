var isMusicOn = false;           //Variable to control the music

/*
 * Method to toggle music on or off
 * It is called when the music icon is clicked
 * How to call: toggleMusic();
 */
function toggleMusic() {
    //fetching the html elements
    var musicIcon = document.getElementById("music");
    var sound = document.getElementsByTagName("audio");
    
    //if music is on, pause it
    if (isMusicOn) {
        musicIcon.setAttribute("src", "raw%20sources/Mute.png");
        sound[0].pause();
        isMusicOn = false;
    } else {
        
        //Else play the music
        musicIcon.setAttribute("src", "raw%20sources/Volume.png");
        sound[0].play();
        isMusicOn = true;
    }
}