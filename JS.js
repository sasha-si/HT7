"use strict";

/* function aclean(arr) {
    let arrSort = [];

    for (let i = 0; i < arr.length; i++) {//let key of arr
        arrSort.push( arr[i].toLowerCase().split('').sort().join(''));        
    }
    console.log(arr.length);
    console.log(arr);
    console.log(arrSort.length);
    console.log(arrSort);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era" */

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
