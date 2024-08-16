
const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");



class Star {
  constructor(x, y) {
    this.x = x; this.y = y;
    this.hsp = 0;
    this.vsp = 0;
    this.xscale = (Math.random()*2.000)-1.000;
    this.size = 30+Math.floor(Math.random()*30);
  }

  draw(g) {
    let star_img = new Image();
    star_img.src = "./content/img/star-spinning.gif";

    g.drawImage(star_img, this.x, this.y, this.size*this.xscale, this.size);
  }
}

document.getElementById("button1").onclick = () => {
  create_star(2+Math.floor(Math.random()*4));
}

// variables
const gravity = 0.1;
let star_arr = [];
let cat = {x:canvas.width/2, y:canvas.height/2}
let dx = -1, dy = -1;
let cat_img = new Image();
cat_img.src = "./content/img/cat.png";



setInterval(()=>{
},600);



setInterval(update, 15);

function update() {
  let offset = 0;
  canvas.width = window.innerWidth-offset;
  canvas.height = window.innerHeight-offset;

  // Draw cat DVD
  var cat_spd = 1;
  var cat_size = 0.25;
  g.drawImage(cat_img, cat.x, cat.y, (cat_img.width * cat_size), cat_img.height * cat_size);

  cat.x += dx * cat_spd;
  cat.y += dy * cat_spd;

  var cw = cat_img.width * cat_size;
  var ch = cat_img.height * cat_size;

  if (cat.x+cw/2 > canvas.width || cat.x-cw/2 < -50) {
    dx = dx * -1;
  }

  if (cat.y+ch/2 > canvas.height || cat.y-ch/2 < -50) {
    dy = dy * -1;
  }


  for (var i=0; i<star_arr.length; i++) {
    var s = star_arr[i];

    s.x += s.hsp;
    s.y += s.vsp;

    s.vsp += gravity;

    s.draw(g);
  }
  
}

cat.x = Math.floor(Math.random() * window.innerWidth);
cat.y = Math.floor(Math.random() * window.innerHeight);


function create_star(val) {
  for (var i = 0; i<val; i++) {
    var star = new Star(canvas.width/2, 200);
    star.hsp = (Math.random()*3.00)-1.00;
    star.vsp -= Math.random()*4.00;

    star_arr.push(star);
  }
}
