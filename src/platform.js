class Platform {
  constructor(ax,ay,aw,ah) {
    this.x=ax;
    this.y=ay;
    this.width=aw;
    this.height=ah;
    this.colorVal=color('#0aa');
  }

  draw() {
    noStroke();
    fill(this.colorVal);
    rect(this.x,this.y, this.width, this.height)
  }

}