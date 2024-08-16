
const ad = document.getElementById("ad");
const img = document.getElementById("img-ad");
const adList = [
  "./content/fovy/content/img/belly.png",
  "./content/fovy/content/img/cutiekitten.png",
  "./content/fovy/content/img/kittentongue.png",
  "./content/fovy/content/img/sleathmode.gif",
  "./content/img/ad3.gif",
];

let index = Math.floor(Math.random()*adList.length);

img.src = adList[index];



