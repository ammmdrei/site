
const bookEl = document.getElementById("book");
const spd = 0.07;
const amplitude = 7;
let tempo = 0;
let yy = 0;

window.onload = () => {
  setInterval(draw, 15);
}

function draw() {
  yy = Math.sin(tempo * spd) * amplitude;
  tempo ++;
  
  bookEl.style = `bottom: ${yy}px`;
}
