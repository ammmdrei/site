


// Variables
const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");
g.imageSmoothingEnabled = false;


window.onload = () => {
  setInterval(draw, 15);
}

function draw() {
  g.fillRect(0, 0, canvas.width, canvas.height);

  var img = new Image();
  img.src = "/content/img/sprites/cloud1.png";

  var resize = 10;
  g.drawImage(img, 100, 100, img.width*resize, img.height*resize);

  drawNoise(5);
}

function drawNoise(val) {
  for (let i = 0; i < canvas.width / val; i++) {
    for (let j = 0; j < canvas.height / val; j++) {
      var color = Math.floor(Math.random()*100);

      g.globalAlpha = 0.2;
      g.fillStyle = `rgb(
        ${color}, 
        ${color}, 
        ${color}
        )`;
      g.fillRect(i*val, j*val, val, val);
    }
  }
}