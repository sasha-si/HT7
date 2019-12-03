"use strict";

let blocks = document.getElementsByClassName("block");
blocks[0].style.backgroundColor = "black";

let position = 0;
let positionVert = 1;
let message = "The edge";

leftArrow.addEventListener('click', function() {
    if (position <= 0 || position % 3 == 0) {
        alert(message);
    } else {
        blocks[position].style.backgroundColor = '#ccc';
        position--;
        blocks[position].style.backgroundColor = "black";
    }
});

rightArrow.addEventListener('click', function() {
    if (position >= (blocks.length / 3 * positionVert) - 1) {
        alert(message);
    } else {
        blocks[position].style.backgroundColor = '#ccc';
        position++;
        blocks[position].style.backgroundColor = "black";
    }
    console.log(position, positionVert);
});

upArrow.addEventListener('click', function() {
    if (positionVert <= 1) {
        alert(message);
    } else {
        blocks[position].style.backgroundColor = '#ccc';
        positionVert--;
        position -= 3;
        blocks[position].style.backgroundColor = "black";
    }
    console.log(position, positionVert);
});

downArrow.addEventListener('click', function() {
    if (positionVert >= blocks.length / 3) {
        alert(message);
    } else {
        blocks[position].style.backgroundColor = '#ccc';
        positionVert++;
        position += 3;
        blocks[position].style.backgroundColor = "black";
    }
    console.log(position, positionVert);
});
