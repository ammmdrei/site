
// Imports
import { Player } from "./player.js";
import { Obstacle } from "./obstacle.js";



// Variables
const canvas = document.getElementById("dino-game");
const g = canvas.getContext("2d");
const groundLevel = 80;
const gravity = .15;
const maxGameSpeed = 10.5;

let gameOver = false;

const player = new Player(50, 0);

let obstacleCooldown = 2000;
let obstacleList = [];

let gameSpeed = 1.75;



window.onload = () => {
  setInterval(draw, 15);
  setInterval(function(){
    if (!gameOver) {
      var cooldownChoices = [1000, 2000, 2000, 2000, 3000, 3000, 4000];
      var index = Math.floor(Math.random()*cooldownChoices.length);
      
      obstacleCooldown = 1000;
  
      var obs = new Obstacle(canvas.width, groundLevel);
      obstacleList.push(obs);
    }
  }, obstacleCooldown);
  
  document.addEventListener("keydown", keyboard_down);
}


function draw() {
  g.clearRect(0, 0, canvas.width, canvas.height);
  g.fillStyle = "black";
  g.fillRect(0, 0, canvas.width, canvas.height);

  player.draw(g);

  if (!gameOver) {
    if (gameSpeed < maxGameSpeed) {
      gameSpeed += 0.0001;
    }

    player.y += player.vsp;

    if (player.y < groundLevel) {
      player.vsp += gravity;
    } else {
      player.y = groundLevel;
    }
  }

  // Draw obstacles
  for (let i = 0; i < obstacleList.length; i++) {
    var obs = obstacleList[i];

    if (!gameOver) {
      obs.x -= gameSpeed;
    }

    obs.draw(g);

    if (obs.x < -25) {
      obstacleList.shift(i);
    }

    var hitbox = 32;
    if (player.x+hitbox/2 > obs.x-hitbox/2 && player.x-hitbox/2 < obs.x+hitbox/2 && player.y+hitbox/2 > obs.y-hitbox/2) {
      gameOver = true;
    }
  }
 

  if (gameOver) {
    g.fillText("Game overrr", 100, 100);
  }

} 


function keyboard_down(e) {
  switch(e.keyCode) {
    case 90:
      if (player.y == groundLevel && !gameOver) {
        player.jump();
      }
      break;
  }
}
