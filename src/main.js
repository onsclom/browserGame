let char;
let platforms = [];

function setup() {
  let canvas = createCanvas(600, 300);
  canvas.parent('sketch-holder');

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
  background(color('#daa'));
  
  //update character location and draw it
  char.update();
  char.draw();
  
  //draw the platforms
  for (let platform of platforms) {
    platform.draw();
  }

  //lets make a little sun
  let sunSize=.25*width
  fill(color('#eb9'));
  circle(width, 0, sunSize);

}