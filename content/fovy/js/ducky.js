
var ducky         = document.getElementById("ducky");
var duckyImg      = document.getElementById("ducky-img");

let duckPos = Math.floor(Math.random()*500)+20;
let side = Math.floor(Math.random()*2)-1;
if (side == 0) side = 1;

duckyImg.src = "../content/img/ducky/duckyidle2.gif";
ducky.style = `right: ${duckPos}px; transform: scaleX(${side});`;
