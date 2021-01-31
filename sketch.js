var player;

var ob1;
var ob2;
var ob3;
var ob4;
var ob5;

var score = 0;

var PLAY = 1;
var END = 0;
gameState = PLAY;

var bg;

var objGroup;

function setup(){

  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  player = createSprite (680, 600, 50, 50);
  player.addImage (playerIMG);
  player.scale = 0.7;

}

function preload(){
  playerIMG = loadImage("Hermione.png");
  ob1IMG = loadImage("timeturner.png");
  ob2IMG = loadImage("wand.png");
  ob3IMG = loadImage("broom.jpg");
  ob4IMG = loadImage("nextob.jpg");
  ob5IMG = loadImage("lastobject.jpg");
  track = loadImage("bg.jpg");

  objGroup = new Group;
}

function draw(){

  background("lightblue");
  image(track, 0, -displayHeight*4, displayWidth, displayHeight*7);

  camera.position.y = player.position.y;

  if(gameState === PLAY){

    if (objGroup.isTouching(player)){
        score = score + 1;
    }

    //Up Arrow
    if(keyWentDown("w")){
      player.y = player.y - 50;
    }

    //Down Arrow
    if(keyWentDown("s")){
      player.y = player.y + 50;
    }

    //Right Arrow
  if (keyWentDown ("d")){
    player.x = player.x + 50;
  }

    //Left Arrow
  if (keyWentDown ("a")){
    player.x = player.x - 50;
  }

  spawnObjects();

  }

if(gameState === END){
  score = 0;
  objGroup.x = 0;
  objGroup.y = 0;
  objGroup.velocityX = 0;
  objGroup.velocityY = 0;
  objGroup.visibility = false;
  player.visibility = false;

  textSize(30)
  text("Game Over! Voldemort Wins. Avade Kedavra!", 20, 40)

}

  drawSprites();

}

function spawnObjects(){
    if(World.frameCount % 150 == 0){
    var objects = createSprite(random(displayWidth/2 - 450, displayWidth/2 + 450), displayHeight/2 - 500);
    objects.velocityX = -6
    var rand = Math.round(random(1, 5));
    switch(rand){
      case 1: objects.addImage(ob1IMG);
      break;
      case 2: objects.addImage(ob2IMG);
      break;
      case 3: objects.addImage(ob3IMG);
      break;
      case 4: objects.addImage(ob4IMG);
      break;
      case 5: objects.addImage(ob5IMG);
      break;
      default:break;
    }

    objGroup.add(objects);

  }
}