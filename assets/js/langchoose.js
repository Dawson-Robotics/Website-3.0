'use strict';

document.addEventListener('DOMContentLoaded', main);

let angle = 0;
const ANGLE_INCREMENT = 0.01;
let strings = ['A Choice', 'Un Choix', "Choose Your Language", "Choisisez Votre Langue"]
let string = 0;
let next = 3.14;

let text;

function main(event) {

    text = document.getElementById("LangChoose");
    setInterval(incAngle, 25);
    setInterval(eventloop, 10);

}

function incAngle() {
    angle += ANGLE_INCREMENT;
}

function eventloop() {

    let transparency = Math.abs(Math.sin(angle));
    setTransparency(transparency);
    
    if (angle >= next) {
        next = next + 3.14;
        string += 1;
        text.innerText = strings[string % strings.length]
    }

}

function setTransparency(transparency) {


    text.style.color = `rgba(10, 196, 117, ${transparency})`

}