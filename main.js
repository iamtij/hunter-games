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
frame.src = './images/base.png';

let again = new Image();
again.src = './images/playagain.png';

let gun1 = new Image();
gun1.src = './images/riffle1.png';

let gun2 = new Image();
gun2.src = './images/riffle2.png';

let gun3 = new Image();
gun3.src = './images/riffle3.png';

let gun4 = new Image();
gun4.src = './images/riffle4.png';

let splash = new Image();
splash.src = './images/intro.png'

//sounds
let shoot = new Audio();
shoot.src = './audio/shoot.wav';

let riffle = new Audio();
riffle.src = './audio/riffle.wav'

let intro = new Audio();
intro.src = './audio/gameintro.wav';

let loading = new Audio();
loading.src = './audio/loadtargets.mp3';

let gameover = new Audio();
gameover.src = './audio/quack.mp3';



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
            
        //store each target in a variable
        switch(i) {
            case 0:
                firstItem = pos[i].tar 
                if (firstItem == randomTarget ) {
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
          
          if (loadgame) {
            loading.play();
          }
          
          

        }

        
        
        //draw the ducks
        ctx.drawImage(pos[i].tar , pos[i].x, pos[i].y)
        
        //stop the animation
        if(pos[i].y > 270 ) {    
            
            pos[i].y = pos[i].y - 3  
                 
        }

        
        
    }

   
    
}

function shootTarget(){

    ctx.drawImage(water, 79, canvas.height - 370)

    if (firstTarget) {
        
        ctx.drawImage(bullet,168,300);
       
        if (firstItem == randomTarget && !firstHit) {     
            shoot.play();           
            firstHit = true;
            userHits++
            score++
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
            score++
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
            score++
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
            score++
        }  else if (!fourthHit) {
            isGameOver = true;
        }
    } 

}

function newRound() {
    //load a new round
   
    pos[0].y = 350;
    pos[1].y = 350;
    pos[2].y = 350;
    pos[3].y = 350;

    pos[0].tar = "";
    pos[1].tar = "";
    pos[2].tar = "";
    pos[3].tar = "";
    
    totalHits = 0;
    userHits = 0;
    randomTarget = "";

    firstTarget = false;
    secondTarget = false;
    thirdTarget = false;    
    fourthTarget = false;

    firstItem = "";
    secondItem = "";
    thirdItem = "";
    fourthItem = "";

    firstHit = false;
    secondHit = false;
    thirdHit = false;
    fourthHit = false;

    

    
}

function draw(){

    ctx.drawImage(bg,0,0);
    
    if (loadgame) {
        showTarget();
        shootTarget();
        ctx.drawImage(gun1, 260,360, gun1.width * .8,gun1.height * .8);

          //  //show single target
        ctx.drawImage(randomTarget, 175, 416)
        ctx.fillStyle = 'black'
        ctx.font = '16px Verdana'
        ctx.fillText("Target:",113,450)

        //loading.play()
    }
    

    if (userHits == totalHits || totalHits == 0) {
        newRound();
        showTarget();
        ctx.drawImage(gun1, 260,360, gun1.width * .8,gun1.height * .8);
       
    }
    


    //ctx.drawImage(water, 79, canvas.height - 370)

   
    
    //show splash
    if (!loadgame) {
        ctx.drawImage(splash,150,70)
    } 
  
    
  

    
 

    ctx.fillStyle = 'white'
    ctx.font = '22px Verdana'
    ctx.fillText("Score:",95,50)
    ctx.fillText(score,170,50)


    if (isGameOver) {
        cancelAnimationFrame(intervalId)
        ctx.drawImage(again, 280, 100,again.width * .5, again.height * .5)
        gameover.play();
        //isGameOver = true;
    }
    else {
        intervalId = requestAnimationFrame(draw)
    }


}


window.addEventListener('load', () => {
    
    //intro.play();
    gameover.play();
    draw();
    
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
        else if (event.key=='r' ) {
            if (isGameOver) {
            location.reload();
            }
        }
        else if (event.key=='Enter')  {
            loadgame = true;
        }
        else {
            isGameOver=true;
        }
    })


})
