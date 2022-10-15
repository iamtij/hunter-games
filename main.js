let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// load all images
let bg = new Image();
bg.src = './images/Game-bg.png';

let duckYellow = new Image();
duckYellow.src = './images/DuckYellow_3.png';

let duckBrown = new Image();
duckBrown.src = './images/DuckBrown_2.png';

let bullet = new Image();
bullet.src = './images/BulletHole.png'

let pole = new Image();
pole.src = './images/TargetPole.png'

let water = new Image();
water.src = './images/water-2.png';

let frame = new Image();
frame.src = './images/frame.png';

let shoot = new Audio();
shoot.src = './audio/shoot.wav';

let riffle = new Audio();
riffle.src = './audio/riffle.wav'

let intro = new Audio();
intro.src = './audio/gameintro.wav';

let loading = new Audio();
loading.src = './audio/loadtargets.mp3';

let gameover = new Audio();
gameover.src = './audio/gameover.wav';



// set variables
let isGameOver = false;

let targets = [
    duckYellow,
    duckBrown
];

let pos = [
    {tar:'', x: 150, y:350},
    {tar:'',x: 310, y:350},
    {tar:'',x: 450, y:350},
    {tar:'',x: 600, y:350}
];

let randomTarget = "";
let firstTarget = false;
let secondTarget = false;
let thirdTarget = false;
let fourthTarget = false;


function showTarget(){
   
    for (let i = 0; i < pos.length;i++) {

        if (pos[i].tar == '') {
            pos[i].tar = targets[Math.floor(Math.random() * targets.length)] ;    
        }

        ctx.drawImage(pos[i].tar , pos[i].x, pos[i].y)
        
        if(pos[i].y > 270 ) {    
            pos[i].y = pos[i].y - 2 
          
        }
  
    }
    
}

function shootTarget(){

    if (firstTarget) (
        ctx.drawImage(bullet,168,300)
    )

    if (secondTarget) (
        ctx.drawImage(bullet,320,300)
    )

    if (thirdTarget) (
        ctx.drawImage(bullet,480,300)
    )

    if (fourthTarget) (
        ctx.drawImage(bullet,620,300)
    )
   

}

function draw(){

    ctx.drawImage(bg,0,0);

     
    showTarget();
    shootTarget();

    ctx.drawImage(water, 79, canvas.height - 370)
    ctx.drawImage(frame, 79, canvas.height - 296 )



    if (isGameOver) {
        cancelAnimationFrame(intervalId)
        ctx.fillStyle = 'white'
        ctx.font = '30px Verdana'
        ctx.fillText("Game Over",300,100)
    }
    else {
        intervalId = requestAnimationFrame(draw)
    }

}

window.addEventListener('load', () => {
    
   

    draw()
    loading.play();

    document.addEventListener('keypress',(event)=> {
        if (event.key=='a') {
            firstTarget=true;
            shoot.play();
        }
        else if (event.key=='s') {
            secondTarget=true;
            shoot.play();
        }
        else if (event.key=='d') {
            thirdTarget=true;
            shoot.play();
        }
        else if (event.key=='f') {
            fourthTarget=true;
            shoot.play();
        }
        else {
            isGameOver=true;
            gameover.play();
        }
    })
})