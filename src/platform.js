class Platform {
  constructor(num) {
    this.x=num;
    this.y=450;
    this.width=25;
    this.height=50;
    this.colorVal=(0, 204, 100);
  }

  draw() {
    fill(color(this.colorVal));
    rect(this.x,this.y, this.width, this.height)
  }

}