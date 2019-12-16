let engine = new Engine();

class Player {
  constructor() {
    this.x=0;
    this.y=300;
    this.size=25;
    this.height=this.size;
    this.width=this.size;
    this.speed=5;
    
    this.yvel=0;
    
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
    /*
    for (let platform of platforms) {
      if (this.isTouching(platform))
      {
        inside = true;
      }
    }
    */

    

    if (this.isTouching(platforms[0]))
    {
      print("true");
    }
    else
    {
      print("false");
    }

    this.x += this.speed*this.curDir;
  }

  isTouching(thing) {
    if (this.x <= thing.x+thing.width && this.x+width >= thing.x)
    {
      return true;
    }
    return false;
  }
}