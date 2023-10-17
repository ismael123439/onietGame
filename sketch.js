let p1, Wobs;
let waterObstacle, fireObstacle, clouds, bolts, rocks;
let non = "a"
let habilities = [" ", "agua", "fuego", "viento", "electricidad", "tierra"]
let currentOption = null;
let windhuman, normalHuman;
let waterObstacleimg, fireObstacleimg, cloudsimg, boltsimg, rocksimg, p1img, p1fireimg;
let character;
let vida = 5;
let bricks, tilesGroup;
let coco = false;

function preload() {
  p1fireimg = loadImage("./imgs/fire/firemanUp.png");
  p1img = loadImage("./imgs/human/humanRight.png");
}

function setup() {
  new Canvas(windowWidth, windowHeight);
  
  p1 = new Sprite(80,80,50,50);
  p1.width = 50;
	p1.height = 50;
  p1.collider = 'none';
  p1.addImage(p1img);
}

function draw() {
  background('red')
  keyPressed();
  characterIteration();
  movement();
}

function keyPressed() {
  if(coco){
    character = 0;
  }
  else{
    character = 2;
  }
  if (character == 0){
    p1.addImage(p1img);
  }
  if (kb.pressing("q")) {
    //agua
    text(habilities[1], p1.x - 18, p1.y - 30);
    character = 1;//agua
  }

  if (key === 'f' || key === 'F') {
    //fuego
    //text(habilities[2], p1.x - 18, p1.y - 30);
    character = 2;//fuego
    p1.addImage(p1fireimg);
    if(character == 2 && (key === 'f' || key === 'F')){
      character = 0;
    }
  }

  if (kb.pressing("v")) {
    //viento
    text(habilities[3], p1.x - 18, p1.y - 30);
    character = 3;//viento
    p1.addImage(windhuman);
  }
  if (kb.pressing("e")) {
    //electricidad
    text(habilities[4], p1.x - 27, p1.y - 30);
    character = 4; //electricidad
  }
  //text(habilities[character], p1.x - 27, p1.y - 30);
}

function movement() {
  if (kb.presses("left")) {
    p1.x-=50;
  }
  if (kb.presses("right")) {
    p1.x+=50;
  }
  if (kb.presses("up")) {
    p1.y-=50;
  }
  if (kb.presses("down")) {
    p1.y+=50;
  }
}


function characterIteration() {
  //text(vida, p1.x - 18, p1.y - 30)
  if (vida === 0) {
    p1.remove();
  };
  /*if (p1.collider(waterObstacle)) {
    if (character === 1) {
      p1.overlaps(waterObstacle);
    } else {
      vida -= 1
    }
  }
  console.log(vida);
  console.log(character);
  if (p1.collides(waterObstacle) && character != 1) {
    vida -= 1
    waterObstacle.collider = 'est'
  } else {
    waterObstacle.collider = 'none'
  }
  console.log(vida);
  console.log(character);*/
}