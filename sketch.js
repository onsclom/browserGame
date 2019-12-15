function setup() {
  createCanvas(600, 500);
}

let char = new Player();
let platforms = [];
let pillarAmount = 4;
let distances = [0,2,5,8]

for (let i=0;i<pillarAmount;i++) {
  //TO DO: set their x values here instead of draw()
  platforms.push(new Platform());
  
}


function draw() {
  background(220);
  
  char.update();
  square(char.x,char.y,char.size,4);
  
  for (let i in platforms) {
    x = distances[i%distances.length]*50;
    rect(x,platforms[i].y, platforms[i].width, platforms[i].height);
  }
}