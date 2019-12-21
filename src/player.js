class Player {
  constructor() {
    this.x=0;
    this.y=0;
    this.size=1/12*height;
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

    this.colorVal=color('#fff')
  }

  draw() {
    fill(this.colorVal);
    square(this.x,this.y,this.size,4);
  }
  
  update() {
    let oldx = this.x;
    let oldy = this.y;
    //set new X
    this.x += this.speed*this.curDir;
    // this may be overidden later if it goes into object

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

        if (!platform.touched)
        {
          platform.touched=true;
          curScore+=1;

          if (platform.podium!="middle")
          {
            variatePlatforms();
            for (let x of platforms)
            {
              if (x!=platform)
              {
                x.touched=false;
              }
            }
          }
        }

        break;
      }
      //if its on the side then stay on side
      else if (this.isTouching(platform))
      {
        //two cases
        //1 on right
        if (oldx+this.width<=platform.x)
        {
          this.x=platform.x-this.width;
        }
        else if (oldx>=platform.x+platform.width)
        {
          this.x=platform.x+platform.width;
        }
        break;
      }
    }

    //check if outside of frame
    if (this.x<0)
    {
      this.x=0;
    }
    else if (this.x+this.width>width)
    {
      this.x=width-this.width;
    }

    if (this.y>height)
    {
      this.die();
    }
  }

  jump() {
    if (this.grounded)
    {
      this.yvel=-this.jumpStrength;
      this.grounded=false;
    }
  }

  die() {
    this.x=0;
    this.y=0;
    curScore=0;
    
    //reset all platforms to untouched
    for (let platform of platforms)
    {
      platform.touched=false;
    }
  }

  isTouching(thing) {
    //x axis
    return (this.x <= thing.x+thing.width && this.x+this.width >= thing.x
    //yaxis
      && this.y <= thing.y+thing.height && this.y+this.height >= thing.y);
  }
}