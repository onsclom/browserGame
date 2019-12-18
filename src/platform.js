class Platform {
  constructor(ax,ay,aw,ah) {
    this.x=ax;
    this.y=ay;
    this.width=aw;
    this.height=ah;
    this.colorVal=(0, 204, 100);
  }

  draw() {
    fill(color(this.colorVal));
    rect(this.x,this.y, this.width, this.height)
  }

}