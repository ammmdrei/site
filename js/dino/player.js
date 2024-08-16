
export default class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vsp = 0;
    this.jumpForce = 3.45; 
  }

  draw(g) {
    g.fillStyle="white";
    g.fillRect(this.x, this.y, 16, 16);
  }

  jump() {
    this.vsp -= this.jumpForce;
  }
}
