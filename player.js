let engine = new Engine();

class Player {
  constructor() {
    this.x=0;
    this.y=400;
    this.size=25;
    this.speed=5;
    
    this.yvel=0;
    
    this.jumping=false;
    
    
    this.left=false;
    this.right=false;
    this.curDir=0;
  }
  
  update() {
    for (let i in platforms) {
      //x checking
    }
    this.x += this.speed*this.curDir;
  }
}