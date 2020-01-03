class Player {
  constructor() {
    this.x=0;
    this.y=0;
    this.size=1/12*height;
    this.height=this.size;
    this.width=this.size;
    this.speed=5;
    this.jumpStrength=14;
    this.bounceStrength=10;
    this.curInv=0;
    this.invFrames=60;
    
    this.gravity=1;
    this.yvel=0;
    this.ymax=13;
    
    this.jumping=false;
    this.grounded=false;
    
    this.left=false;
    this.right=false;
    this.curDir=0;

    this.colorVal=color('#fff');
  }

  draw() {
    if (this.curInv)
    {
      this.colorVal.setAlpha(150);
      this.curInv-=1;
    }
    fill(this.colorVal);
    this.colorVal.setAlpha(255);
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

    this.platformInteraction(oldx,oldy);
    this.birdInteraction(oldx,oldy);

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

  birdInteraction(oldx,oldy) {
    for (let bird of birds) {
      let birdX = bird.x-this.size;
      let birdY = bird.y-this.size*.25;
      let birdWidth = bird.size*2;
      let birdHeight = bird.size;
      if (bird.killx > this.x && bird.killx < this.x+this.size && bird.killy > this.y && bird.killy < this.y+this.size)
      {
        if (bird.killx>oldx && bird.killx<oldx+this.size && bird.killy-bird.fallingGrav< oldy+this.size && bird.state==0 && !this.curInv)
        {
          this.die();
        }
      }
      else if ((this.x <= birdX+birdWidth && this.x+this.width >= birdX
          && this.y <= birdY+birdHeight && this.y+this.height >= birdY))
      {
        this.curInv=this.invFrames;
        this.bounce();
        bird.fallingGrav+=1.5;
        bird.state=0;
      }
    }
  }

  platformInteraction(oldx,oldy) {
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
  }

  jump() {
    if (this.grounded)
    {
      this.yvel=-this.jumpStrength;
      this.grounded=false;
    }
  }

  jumpRelease() {
    if (this.yvel < 0 && this.grounded==false)
    {
      this.yvel=0;
    }
  }

  bounce() {
    this.yvel=-this.bounceStrength;
    this.grounded=true;
  }

  die() {
    this.x=0;
    this.y=0+this.size;
    curScore=0;
    birdCount=0;
    
    //reset all platforms to untouched
    for (let platform of platforms)
    {
      platform.touched=false;
    }

    for (let bird of birds)
    {
      bird.state=0;
    }
  }

  isTouching(thing) {
    //x axis
    return (this.x <= thing.x+thing.width && this.x+this.width >= thing.x
    //yaxis
      && this.y <= thing.y+thing.height && this.y+this.height >= thing.y);
  }
}