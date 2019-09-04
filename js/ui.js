//Method to create the UI
function onloadApp() {
    var body = document.body;
    var audio = createAudio("sounds/theme_music.mp3");

    var div = document.createElement("div");
    div.classList.add("container");

    var header = createHeader("heading", "Memory Matching Game");

    var section = document.createElement("section");
    section.classList.add("score-panel");

    var moves = createSpan("moves", "0 moves, time: ");
    var time = createSpan("time", "0 secs");

    var restartImage = createImage("reload", "images/Reload.png");
    var restartElement = createSpan("restart", "");
    restartElement.addEventListener("click", restart);
    restartElement.appendChild(restartImage);

    var musicImage = createImage("music", "raw%20sources/Mute.png");
    var bgMusic = createSpan("bgMusic", "");
    bgMusic.addEventListener("click", toggleMusic);
    bgMusic.appendChild(musicImage);

    section.appendChild(moves);
    section.appendChild(time);
    section.appendChild(restartElement);
    section.appendChild(bgMusic);

    var ul = document.createElement("ul");
    ul.classList.add("board");

    div.appendChild(header);
    div.appendChild(section);
    div.appendChild(ul);
    
    var footer = document.createElement("footer");
    footer.innerHTML = "&copy; Copyright 2018, Shubham Jindal. Music by Eric Matyas (<a href='https://www.soundimage.org' target='_blank'>www.soundimage.org</a>).";

    body.appendChild(audio);
    body.appendChild(div);
    body.appendChild(footer);
    //Starting the game
    startGame();
}
