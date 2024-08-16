
export class Obstacle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.type = Math.floor(Math.random()*1)+1;
    this.collisionSize = 0;
  }

  draw(g) {
    switch(this.type) {
      case 0:
        this.collisionSize = 32;
        break;
      case 2:
        this.collisionSize = 28;
        break;
    }
    console.log(this.collisionSize);

    g.fillStyle = "white";
    g.fillRect(this.x, this.y, this.collisionSize, this.collisionSize);
  }
}
