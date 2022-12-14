# Hunter Games

## Description

Hunter games is a shooting gallery where the player has to shoot the correct target from a row of random objects. The player gets a score based on the response time and accuracy of the hit. The game ends when the time is up or if there are not correct hits.

## MVP
- there are four random objects that will be displayed each round
- each round has different time limit based on the level of difficulty (easy - 5 seconds, medium - 4 seconds, hard - 3 seconds)
- there is one target for every round and the object will be displayed as Target
- to shoot, the player can press A, S, D, F, each letter corresponds to the sequence of the objects
- scores are calculated based on the accuracy and the response time

## Backlog
- countdown timer
- leaderboard

## Data Structure

#main.js

- splashScreen () {}
- gameScreen () {}
- gameOverScreen() {}

#game.js

- start () {}
- showObjects () {}
- showTarget () {}
- calculateScore () {}
- showTimer () {}

#shoot.js

- hitTarget () {}

### Git
[Link](https://github.com/iamtij/hunter-games)

### Slides
[Link](https://www.canva.com/design/DAFPmIpWtUU/ccwTdFX1Zs1YcHhVOWLxew/view?utm_content=DAFPmIpWtUU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
