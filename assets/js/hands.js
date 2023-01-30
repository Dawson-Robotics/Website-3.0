'use strict';

document.addEventListener('DOMContentLoaded', main);

let indx = 0;
let indx2 = 0;

let gimg;
let gimg2;

let enterevt;
let exitevt;

let enterevt2;
let exitevt2;

var rain;

function main(event) {
    
    /**
     * @type {HTMLImageElement}
     */
    gimg = document.querySelector("#handimg");
    gimg2 = document.querySelector("#lefthandimg");
    gimg.addEventListener('mouseenter', enter);
    gimg.addEventListener('mouseleave', exit);
    gimg2.addEventListener('mouseenter', enter2);
    gimg2.addEventListener('mouseleave', exit2);
    rain = document.getElementById("transition-in"); 
 
    // window.addEventListener('mousemove', mouseMoveEvent);

}

function enter (event) {

    let img = event.target;

    clearInterval(exitevt);

    enterevt = setInterval(() => {
       
        indx++;
        indx = clampInt(indx, 0, 12);
    
        let srcimg = `/Website-3.0/assets/images/hands_assets/frame_${indx}_delay-0.12s.png`
        img.src = srcimg;

    }, 50);

    setTimeout(() => {
        clearInterval(enterevt);
    }, 1500);

}

function exit (event) {

    let img = event.target;
    clearInterval(enterevt);

    exitevt = setInterval(() => {
    
        indx--;
        indx = clampInt(indx, 0, 12);
    
        let srcimg = `/Website-3.0/assets/images/hands_assets/frame_${indx}_delay-0.12s.png`
        img.src = srcimg;

    }, 50);

    setTimeout(() => {
        clearInterval(exitevt);
    }, 1500);

}

function redirEng() {

    clearInterval(exitevt);
    clearInterval(exitevt2)
    gimg.removeEventListener('mouseenter', enter);
    gimg.removeEventListener('mouseleave', exit);
    gimg2.removeEventListener('mouseenter', enter2);
    gimg2.removeEventListener('mouseleave', exit2);


    let handsec = document.querySelector(".hand.right");
    let handsec2 = document.querySelector(".hand.left");
    let handtext = document.querySelector(".hand.right p")

    handtext.style.transition = "all 1s cubic-bezier(.07,.12,.09,1.06)"
    handtext.style.filter = "brightness(0%)"
    handsec.style.transform = "scale(2.0)"
    handsec2.style.transform = "scale(0.5)"
    handsec2.style.filter = "brightness(0%)"
    angle = 1;

    clearInterval(angleint);
    setInterval(() => {
        
        if (angle > 0) {
            angle-= 0.1;
        }
            
    }, 100);
    
    leave('en')

}

function redirFr() {

    clearInterval(exitevt);
    clearInterval(exitevt2)

    gimg.removeEventListener('mouseenter', enter);
    gimg.removeEventListener('mouseleave', exit);
    gimg2.removeEventListener('mouseenter', enter2);
    gimg2.removeEventListener('mouseleave', exit2);

    let handsec = document.querySelector(".hand.left");
    let handsec2 = document.querySelector(".hand.right");
    let handtext = document.querySelector(".hand.left p")

    handtext.style.transition = "all 1s cubic-bezier(.07,.12,.09,1.06)"
    handtext.style.filter = "brightness(0%)"
    handsec.style.transform = "scale(2.0)"
    handsec2.style.transform = "scale(0.5)"
    handsec2.style.filter = "brightness(0%)"
    angle = 1;

    clearInterval(angleint);
    setInterval(() => {
        
        if (angle > 0) {
            angle-= 0.1;
        }
            
    }, 100);
    
    leave('fr');


}

function leave(lang) {
    
    rain.hidden = false;
    rain.setAttribute("transition-style", "in:wipe:bottom-right");


    if (lang ='en')
        setTimeout(() => {
            location.href='home';
        }, 1500);
    
    if(lang = 'fr')
        setTimeout(() => {
            location.href='fr/acceuil';
        }, 1500);

}


function enter2(event) {

    let img = event.target;

    clearInterval(exitevt2);

    enterevt2 = setInterval(() => {
       
        indx2++;
        indx2 = clampInt(indx2, 0, 12);
    
        let srcimg = `/Website-3.0/assets/images/hands_assets/frameb_${indx2}_delay-0.12s.png`
        img.src = srcimg;

    }, 50);

    setTimeout(() => {
        clearInterval(enterevt2);
    }, 1500);

}

function exit2 (event) {

    let img = event.target;
    clearInterval(enterevt2);

    exitevt2 = setInterval(() => {
    
        indx2--;
        indx2 = clampInt(indx2, 0, 12);
    
        let srcimg = `/Website-3.0/assets/images/hands_assets/frameb_${indx2}_delay-0.12s.png`
        img.src = srcimg;

    }, 50);

    setTimeout(() => {
        clearInterval(exitevt2);

    }, 1500);

}

function clampInt(int, min, max) {

    if (int < min) 
        int = min;

    if (int > max) 
        int = max;
    
    return int;

}