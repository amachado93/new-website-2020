let r = 0
let g = 0
let b = 0

function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
  }

function mouseClicked() {

   r = getRandomInt(255);
   g = getRandomInt(100);
   b = getRandomInt(255);

}


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(r, g, b);

}
