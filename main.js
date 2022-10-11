let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
//canvas.style.border = '2px solid black';

// load all images
let bg = new Image();
bg.src = './images/Background_Blue.png';

let duck = new Image();
duck.src = './images/duck_outline_target_yellow.png';



// set variables
let duckX = 200;
let duckY = 300;


function draw(){

    ctx.drawImage(bg,0,0);
    ctx.drawImage(duck,duckX,duckY);
    ctx.drawImage(duck,duckX - 100,duckY - 130);
    ctx.drawImage(duck,duckX + 100,duckY - 230);

}


window.addEventListener('load', () => {
    draw()

    // document.addEventListener('mousedown',() => {
    //     //birdY = birdY - 50
    //     birdClick = true;
    // })
    // document.addEventListener('mouseup',() => {
    //     //birdY = birdY - 50
    //     birdClick = false;
    // })
})