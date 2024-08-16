
const fake_ad_list = [
  ['../content/img/cutiekitten.png', "she loves sleeping in this position xD"],
  ['../content/img/kittentongue.png', "SHE SLEPT WITH HER TONGUE OUT 😭"],
  ['../content/img/belly.png', "beautiful"],
  ['../content/img/sleathmode.gif', "deal with the consequences"],
];

let fake_ad_index = Math.floor(Math.random()*fake_ad_list.length);

document.getElementById("fake-ad-img").src = fake_ad_list[fake_ad_index][0];
document.getElementById("fake-ad-img").title = fake_ad_list[fake_ad_index][1];

