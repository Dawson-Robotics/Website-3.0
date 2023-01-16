'use strict';

document.addEventListener('DOMContentLoaded', main);

let angle = 0;
const ANGLE_INCREMENT = 0.025;
let strings = ['Dawson Robotics', 'Robotiques Dawson', "Choose Your Language", "Choisisez Votre Langue", "English Or French?", "Anglais Ou Francais?"]
let string = 0;
let next = 3.14;
let angleint;

let text;

function main(event) {

    text = document.getElementById("LangChoose");
    angleint = setInterval(incAngle, 25);
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