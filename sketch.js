
var box1, box2, box3, box4, gameBox;
var music;

function preload(){

  music = loadSound("music.mp3");
}
function setup() {
  createCanvas(1200, 800);


  box1 = createSprite(150, 770, 300, 50);
  box1.shapeColor = "blue";
  box1.debug = true;

  box2 = createSprite(460, 770, 300, 50);
  box2.shapeColor = "yellow";
  box2.debug = true;

  box3 = createSprite(770, 770, 300, 50);
  box3.shapeColor = "red";
  box3.debug = true;

  box4 = createSprite(1080, 770, 300, 50);
  box4.shapeColor = "green";
  box4.debug = true;

  gameBox = createSprite(600, 150, 80, 80);
  gameBox.shapeColor = "white";
  gameBox.debug = true;
  gameBox.velocityY = 12;
  gameBox.velocityX = -8;

}

function draw() {
  background(0, 0, 0);

  Edges(gameBox);

  if (isTouching(box1, gameBox)) {
    gameBox.shapeColor = "blue";
    bounceOff(gameBox, box1);
    music.play();
  }
  

  if (isTouching(box2, gameBox)) {
    gameBox.shapeColor = "yellow";
    bounceOff(gameBox, box2);
  }


  if (isTouching(box3, gameBox)) {
    gameBox.shapeColor = "red";
    bounceOff(gameBox, box3);
  }
 

  if (isTouching(box4, gameBox)) {
    gameBox.shapeColor = "green";
    bounceOff(gameBox, box4);
  }


 

 

  drawSprites();
}

