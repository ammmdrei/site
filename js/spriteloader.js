
const file = document.getElementById("file");
const reload = document.getElementById("reload-button");
const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");

let image = new Image();

reload.onclick = () => {
  let fileName = file.files[0].name;

  image.src = fileName;
  console.log(image.src);

  var img = document.createElement("image");
  img.src = fileName;
  
}


window.onload = () => {
  setInterval(()=>{
    draw(g);
  }, 5);
}

function draw(g) {
  g.drawImage(image, canvas.width/2, canvas.height/2);
}
