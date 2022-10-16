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
let singleTarget = "";

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

let firstItem = "";
let secondItem = "";
let thirdItem = "";
let fourthItem = "";

let firstHit = false;
let secondHit = false;
let thirdHit = false;
let fourthHit = false;

let totalHits = 0;
let userHits = 0;

let loadgame = false;
let score = 0;

function showTarget(){
   
    for (let i = 0; i < pos.length;i++) {

        //get and store a random target
        if (pos[i].tar == '') {
            pos[i].tar = targets[Math.floor(Math.random() * targets.length)] ; 
            if (randomTarget == '')  {
                randomTarget = targets[Math.floor(Math.random() * targets.length)] ;  
            }
                
        }

        //store each target in a variable
        switch(i) {
            case 0:
                firstItem = pos[i].tar 
                if (firstItem == randomTarget) {
                    totalHits++
                }
                break;
            case 1:
                secondItem = pos[i].tar 
                if (secondItem == randomTarget) {
                    totalHits++
                }
                break;
            case 2:
                thirdItem = pos[i].tar 
                if (thirdItem == randomTarget) {
                    totalHits++
                }
                break;
            case 3:
                fourthItem = pos[i].tar 
                if (fourthItem == randomTarget) {
                    totalHits++
                }
                break;
            default:
             
          }
        
        //draw the bird
        ctx.drawImage(pos[i].tar , pos[i].x, pos[i].y)
        
        //stop the animation
        if(pos[i].y > 270 ) {    
            pos[i].y = pos[i].y - 3       
        }

       
        
    }

   
    
}

function shootTarget(){

    if (firstTarget) {
        ctx.drawImage(bullet,168,300);
        if (firstItem == randomTarget && !firstHit) {     
            shoot.play();           
            firstHit = true;
            userHits++
        } else if (!firstHit) {
            isGameOver = true;
        }
    }

    if (secondTarget) {
        ctx.drawImage(bullet,320,300);
        if (secondItem == randomTarget & !secondHit) {
            shoot.play();       
            secondHit = true;
            userHits++
        } else if (!secondHit) {
            isGameOver = true;
        }
    }  
    
    if (thirdTarget) {
        ctx.drawImage(bullet,480,300);
        if (thirdItem == randomTarget & !thirdHit) {
            shoot.play();     
            thirdHit = true;
            userHits++
        } else if (!thirdHit) {
            isGameOver = true;
        }
    } 

    if (fourthTarget) {
        ctx.drawImage(bullet,620,300);
        if(fourthItem == randomTarget & !fourthHit) {
            shoot.play(); 
            fourthHit = true;
            userHits++
        }  else if (!fourthHit) {
            isGameOver = true;
        }
    } 

    score = userHits;

}

function draw(){

    ctx.drawImage(bg,0,0);

   //while(loadgame) {
    showTarget();
   //}
    

    shootTarget();

    

    ctx.drawImage(water, 79, canvas.height - 370)
    ctx.drawImage(frame, 79, canvas.height - 296 )

    //  //show single target
    ctx.drawImage(randomTarget, 180, 410)

    ctx.fillStyle = 'black'
    ctx.font = '22px Verdana'
    ctx.fillText("Target:",95,450)

    ctx.fillStyle = 'white'
    ctx.font = '22px Verdana'
    ctx.fillText("Score:",95,50)
    ctx.fillText(score,170,50)

    if (isGameOver) {
        cancelAnimationFrame(intervalId)
        ctx.fillStyle = 'white'
        ctx.font = '30px Verdana'
        ctx.fillText("Game Over",300,100)
        //gameover.play();
    }
    else {
        intervalId = requestAnimationFrame(draw)
    }


}

function reload() {


    randomTarget = "";
    totalHits = 0;
    userHits = 0;
    loadgame = true;

    draw();
    
  
    //loading.play();

}

window.addEventListener('load', () => {
    
    reload();

    document.addEventListener('keypress',(event)=> {

        if (event.key=='a' && !firstTarget) {
            firstTarget=true;
        }
        else if (event.key=='s') {
            secondTarget=true;

        }
        else if (event.key=='d') {
            thirdTarget=true;

        }
        else if (event.key=='f') {
            fourthTarget=true;

        }

        else {
            isGameOver=true;
            
        }
    })


})