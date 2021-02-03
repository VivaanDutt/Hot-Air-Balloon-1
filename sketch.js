var balloon;
var balloonImg;
var backgroundImg;


function preload() {
  backgroundImg = loadImage("Hot Air Ballon-01.png")
  balloonImg = loadAnimation("Hot Air Ballon-02.png", "Hot Air Ballon-03.png", "Hot Air Ballon-04.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  balloon = createSprite(250, 250, 10, 10);
  ballon.image = (balloonImg);
}

function draw() {
  background(backgroundImg);  
}