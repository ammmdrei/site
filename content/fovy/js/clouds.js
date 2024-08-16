
// Canvas
window.onload = () => {
  setInterval(draw, 15);
}


// Background
const canvas = document.getElementById("background-canvas");
const g = canvas.getContext("2d");
const cloud_number = 100;

const cloud_images = [
  '../content/img/sprites/cloud1.png',
  '../content/img/sprites/cloud2.png',
  '../content/img/sprites/cloud3.png',
];

class Cloud {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.image = cloud_images[Math.floor(Math.random()*cloud_images.length)];
    this.spd = (Math.random()*0.3)+0.01;
  }

  draw(g) {
    const img = new Image();
    img.src = this.image;

    g.drawImage(img, this.x, this.y);
  }
}

let cloud_list = [];

for (var i = 0; i < cloud_number; i++) {
  var xx = Math.floor(Math.random()*canvas.width);
  var yy = Math.floor(Math.random()*canvas.height);
  var a = new Cloud(xx, yy);
  cloud_list.push(a);
}

function draw() {
  g.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let i = 0; i < cloud_list.length; i++) {
    var c = cloud_list[i];
    c.x -= c.spd;

    c.draw(g);

    if (c.x < -50) {
      cloud_list.splice(i, 1);

      var xx = canvas.width;
      var yy = Math.floor(Math.random()*canvas.height);
      var a = new Cloud(xx, yy);
      cloud_list.push(a);
    }
  }

  const ily = new Image();
  ily.src = '../content/img/sprites/ilu.png';
}
