

import Player from "./player.js";
import Tree from "./tree.js";


const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");
const ground = 200;
const spawnGap = [100, 150, 200, 250];
const gravity = 0.16;

let player = new Player(100, 20);
let trees = [];
let gameSpd = 2.2;

let treeCooldown = 0;
let spawnTime = 0;


document.addEventListener("keydown", keyboard);

setInterval(function(){
  draw();
}, 15);


function spawnTree() {
  trees.push(new Tree(800, ground, 20));
  spawnTime = spawnGap[Math.floor(Math.random()*spawnGap.length)];
}


function draw() {
  g.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < trees.length; i++) {
    trees[i].draw(g);
    trees[i].x -= gameSpd;
  }


  treeCooldown ++;
  if (treeCooldown >= spawnTime) {
    treeCooldown = 0;
    spawnTree();
  }


  player.y+=player.vsp;
  if (player.y < ground) {
    player.vsp += gravity;
  } else {
    player.vsp = 0;
    player.y = ground;
  }
  
  player.draw(g);
}

function keyboard(e) {
  switch(e.keyCode) {
    case 90:
      if (player.y == ground) {
        player.jump();
      }
      break;
  }
  
}

