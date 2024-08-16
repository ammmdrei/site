
export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vsp = 0;
    this.jumpForce = 5;
  }

  draw(g) {
    var img = new Image();
    img.src = "../content/img/sprites/player.png";

    g.drawImage(img, this.x, this.y);
  }

  jump() {
    this.vsp = 0;
    this.vsp -= this.jumpForce;
  }
}
