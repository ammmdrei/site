
export default class Tree {
  constructor(x, y, height){
    this.x = x;
    this.y = y;
    this.height = height;
  }

  draw(g){
    g.fillStyle="white";
    g.fillRect(this.x, this.y-this.height+16, 16, this.height);
  }
}
