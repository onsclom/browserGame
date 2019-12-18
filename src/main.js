let char = new Player();
let platforms = [];
let platformAmount = 4;
let distances = [0,2,5,8]

//making platforms
for (let i=0;i<platformAmount;i++) {
  x = distances[i%distances.length]*50;
  platforms.push(new Platform(x));
}

function setup() {
  createCanvas(600, 500);

  platforms.push(new Platform(20));
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