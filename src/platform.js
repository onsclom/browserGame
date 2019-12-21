class Platform {
  constructor(ax,ay,aw,ah,type) {
    this.x=ax;
    this.y=ay;
    this.width=aw;
    this.height=ah;
    this.colorVal=color('#0dd');
    this.altColorVal=color('#0aa');
    this.podium=type;
    this.touched=false;

    //for variating
    this.goalx;
    this.goaly;
    this.oldx;
    this.oldy;
    this.transformTime=30;
    this.step=this.transformTime;
  }

  draw() {
    this.update();

    noStroke();
    if (this.touched)
    {
      fill(this.altColorVal);
    }
    else
    {
      fill(this.colorVal);
    }
    rect(this.x,this.y, this.width, this.height)
  }

  update() {
    if (this.step<this.transformTime)
    {
      this.step+=1;
      this.x=this.step/this.transformTime*this.goalx+(1-this.step/this.transformTime)*this.oldx;
      this.y=this.step/this.transformTime*this.goaly+(1-this.step/this.transformTime)*this.oldy;
    }
  }

}