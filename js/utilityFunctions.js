/*
 * Method to shuffle the array
 * Parameter: any array eg. ['Car.png', 'Bug.png', 'Cat.png', 'Guitar.png']
 * How to call: var example_name = shuffleArray(array);
 * Return Type: array of the same type as the input array
 */
function shuffleArray(array) {
    let currIndex = array.length, temporaryValue, randomIndex;
    
    //While there are still cards left to shuffle
    while (currIndex !== 0) {
        
        //Picking element from remaining elements
        randomIndex = Math.floor(Math.random() * currIndex);
        currIndex = currIndex - 1;
        
        //Performing the swap
        temporaryValue = array[currIndex];
        array[currIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    /*
     * Returning the shuffled array
     * Eg. ['Bug.png', 'Cat.png', 'Car.png', 'Guitar.png']
     */
    return array;
}

//Method to create the sudio element
window.createAudio = function(path) {
    let audio = document.createElement("audio");
    audio.loop = true;
    
    let source = document.createElement("source");
    source.setAttribute("src", path);
    source.setAttribute("type", "audio/mpeg")
    
    audio.appendChild(source);
    return audio;
}

//Method to create the header element
window.createHeader = function(id, text) {
    let header = document.createElement("header");
    
    let h1 = document.createElement("h1");
    h1.setAttribute("id", id);
    h1.innerHTML = text;
    
    header.appendChild(h1);
    
    return header;
}

//Method to create the span element
window.createSpan = function(className, text) {
    let span = document.createElement("span");
    span.classList.add(className);
    span.innerHTML = text;
    return span;
}

//Method to create the image element
window.createImage = function(id, path) {
    let img = document.createElement("img");
    img.setAttribute("id", id);
    img.setAttribute("src", path);
    return img;
}