let char;
let platforms = [];
let standardLocations = [];
let birds = [];
let curScore = 0;
let highScore = 0;
let variance; //how much +/- the platforms may change by
let birdCount = 0;

function setup() {
  let canvas = createCanvas(600, 300);
  canvas.parent('sketch-holder');

  char = new Player();

  variance = .05*width;

  //left side 
  platforms.push(new Platform(0,2/3*height,1/10*width,1/3*height,"left"));
  //right side
  platforms.push(new Platform(width-1/10*width,2/3*height,1/10*width,1/3*height,"right"));

  standardLocations = [.5*width-1/40*width-.22*width,.5*width-1/40*width,.5*width-1/40*width+.22*width];

  platforms.push( new Platform(standardLocations[0],3/4*height,1/20*width,1/3*height,"middle"));
  platforms.push( new Platform(standardLocations[1],3/4*height,1/20*width,1/3*height,"middle"));
  platforms.push( new Platform(standardLocations[2],3/4*height,1/20*width,1/3*height,"middle"));

}

function makeBirds() {
    //rng to spawn bird
    birdCount+=1;
    if (birdCount>=max(5,100-curScore*.5)) {
      let end = .05*width+Math.random()*(width-.05*width);
      birds.push(new Bird(25+Math.round(Math.random()*25), Math.round(Math.random()),end));
      birdCount = 0;
    }
    //make birds
    for (let i=birds.length-1;i>=0;i--)//go in reverse since popping duh
    {
      birds[i].draw();
      if (birds[i].y>height)
      {
        birds.splice(i,1);
      }
    }
}

function draw() {
  background(color('#daa'));
  //lets make a little sun
  let sunSize=.25*width
  fill(color('#eb9'));
  circle(width, 0, sunSize);
  
  //update character location and draw it
  char.update();
  char.draw();
  
  //draw the platforms
  for (let platform of platforms) {
    platform.draw();
  }

  makeBirds();

  //write/update scores
  highScore=max(highScore,curScore);
  document.getElementById("curScore").textContent="score: "+curScore;
  document.getElementById("highScore").textContent="high score: "+highScore;
}

function variatePlatforms() {
  for (i=2; i<=4; i++) //iterate on middle platforms (they are at positions 2, 3, and 4 in array)
  {
    platforms[i].oldx=platforms[i].x;
    platforms[i].oldy=platforms[i].y;

    //now to make new
    createdX = round(standardLocations[i-2]+random(-variance,variance)); //i-2 is index for standardLocation
    platforms[i].goalx=createdX;
    platforms[i].goaly=platforms[i].oldy;

    platforms[i].step=0;
  }
}