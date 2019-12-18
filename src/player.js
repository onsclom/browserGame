class Player {
  constructor() {
    this.x=0;
    this.y=300;
    this.size=25;
    this.height=this.size;
    this.width=this.size;
    this.speed=5;
    this.jumpStrength=12;
    
    this.gravity=1;
    this.yvel=0;
    this.ymax=10;
    
    this.jumping=false;
    this.grounded=false;
    
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
    let oldx = this.x;
    let oldy = this.y;

    //apply gravity and check if at max
    this.yvel+=this.gravity;
    if (this.yvel>this.ymax) {
      this.yvel=this.ymax;
    }
    this.y+=this.yvel;

    //check if should be ontop of a platform
    for (let platform of platforms) {
      //if its above the put ontop
      if (this.isTouching(platform) && oldy+this.width<=platform.y)
      {
        //teleport it above thing for now 
        this.y=platform.y-this.height;
        this.yvel=0;
        this.grounded=true;
        break;
      }
      //if its on the side then stay on side
      else if (this.isTouching(platform))
      {

        print("aye");
        //two cases
        //1 on right
        if (oldx+this.width<=platform.x)
        {
          print(oldx+this.width);
          this.x=platform.x-this.width;
        }
        else
        {
          print("WAT");
        }
      }
    }

    //check if outside of frame
    this.x += this.speed*this.curDir;
    if (this.x<0)
    {
      this.x=0;
    }
    else if (this.x+this.width>width)
    {
      this.x=width-this.width;
    }
  }

  jump() {
    if (this.grounded)
    {
      this.yvel=-this.jumpStrength;
      this.grounded=false;
    }
  }

  isTouching(thing) {
    //x axis
    return (this.x <= thing.x+thing.width && this.x+this.width >= thing.x
    //yaxis
      && this.y <= thing.y+thing.height && this.y+this.height >= thing.y);
  }
}