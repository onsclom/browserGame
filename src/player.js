class Player {
  constructor() {
    this.x=0;
    this.y=300;
    this.size=25;
    this.height=this.size;
    this.width=this.size;
    this.speed=5;
    
    this.gravity=1;
    this.yvel=0;
    this.ymax=4;
    
    this.jumping=false;
    
    this.left=false;
    this.right=false;
    this.curDir=0;

    this.colorVal=(0, 0, 200);
  }

  draw() {
    fill(color(this.colorVal));
    square(this.x,this.y,this.size,4);
  }
  
  update() {
    let inside = false;
    let oldx = this.x;
    let oldy = this.y;
    this.x += this.speed*this.curDir;

    this.yvel+=.1;
    if (this.yvel>this.ymax) {
      this.yvel=this.ymax;
    }
    this.y+=this.yvel;

    for (let platform of platforms) {
      if (this.isTouching(platform))
      {
        print("WOW");
        inside = true;
        //teleport it above thing for now 
        this.y=platform.y-this.height;
        this.yvel=0;
        break;
      }
    }
  }

  jump() {
    this.yvel-=3;
  }

  isTouching(thing) {
    //x axis
    return (this.x <= thing.x+thing.width && this.x+this.width >= thing.x
    //yaxis
      && this.y <= thing.y+thing.height && this.y+this.height >= thing.y);
  }
}