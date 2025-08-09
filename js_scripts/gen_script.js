function makeItalics() {
    document.getElementById("h-text").style.backgroundColor = "blue";
    document.getElementById("h-text").style.color = "white";
}

function undoItalics() {
    document.getElementById("h-text").style.backgroundColor = "";
    document.getElementById("h-text").style.color = "black";
}

// Had to use the windo.onload function, gotten from ChatGPT after asking it why my two code lines
// working previously, so it gave me this as an option.  
window.onload = function () {
    let fSize = prompt('Please select your preferred font size', 12);
    document.getElementById("h-text").style.fontSize = fSize + "px";
};