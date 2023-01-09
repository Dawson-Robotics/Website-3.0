'use strict';

document.addEventListener('DOMContentLoaded', main);

let indx = 0;
let indx2 = 0;


let enterevt;
let exitevt;

let enterevt2;
let exitevt2;

function main(event) {
    
    /**
     * @type {HTMLImageElement}
     */
    let img = document.querySelector("#handimg");
    let img2 = document.querySelector("#lefthandimg");
    img.addEventListener('mouseenter', enter);
    img.addEventListener('mouseleave', exit);
    img2.addEventListener('mouseenter', enter2);
    img2.addEventListener('mouseleave', exit2);
 
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


function enter2 (event) {

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