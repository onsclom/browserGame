let char;
let platforms = [];

function setup() {
  createCanvas(600, 300);
  char = new Player();

  //left side 
  platforms.push(new Platform(0,2/3*height,1/10*width,1/3*height));
  //right side
  platforms.push(new Platform(width-1/10*width,2/3*height,1/10*width,1/3*height));

  //now to spawn 4 middle skinny ones
  for (let i=0;i<4;i++)
  {
    platforms.push(new Platform(.2*width+i*.18*width,2/3*height,1/20*width,1/3*height));
  }

}

function draw() {
  background(220);
  
  //update character location and draw it
  char.update();
  char.draw();
  
  //draw the platforms
  for (let platform of platforms) {
    platform.draw();
  }

}