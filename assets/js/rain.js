
let canv = document.getElementById("canvas");

let angle2 = 0;
let angle3 = 1.7;

const matrixRain = new MatrixRain(
    element = canv,
    // fullscreen
    width = window.innerWidth,
    height = window.innerHeight,
    charList = [
        '1', '0'
    ],
    red = 0, 
    green = 255, 
    blue = 0,
    randomColors = false,
    flowRate = 0.2,
    fps = 10
);

matrixRain.run();
matrixRain.setCanvasDimensions(window.innerWidth, window.innerHeight);

window.addEventListener("resize", () => {
    matrixRain.setCanvasDimensions(window.innerWidth, window.innerHeight);
});

// setInterval(() => {
//     angle += 0.01;
//     angle2 += 0.01;
//     let col = Math.abs(Math.sin(angle))
//     let col2 = Math.abs(Math.sin(angle2))
//     matrixRain.color.blue = col * 255;
//     matrixRain.color.green = col2 * 255;
//     matrixRain.color.red = 0;
// }, 100);