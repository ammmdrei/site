
const hamb = document.getElementById("hamb");
const menu = document.getElementById("menu");

hamb.onclick = () => {
  if (menu.classList == "menu active") {
    menu.classList = "menu";
  } else {
    menu.classList = "menu active";
  }
}
