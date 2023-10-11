let waterObstacle, fireObstacle, clouds, bolts, rocks;
let non = "a"
let habilities = [" ", "agua", "fuego", "viento", "electricidad", "tierra"]
let currentOption = null;
let windhuman, normalHuman;
let waterObstacleimg, fireObstacleimg, cloudsimg, boltsimg, rocksimg;
let character;
let vida = 5;
let bricks, tilesGroup;


function preload() {
  windhuman = loadImage("./imgs/windhuman.png");
  normalHuman = loadImage("./imgs/human.png");
}

function setup() {
  Obstacle();
  p1.rotationLock = true;
  waterObstacle.rotationLock = true;

}

function draw() {
  Obstacle();
  chamgeSkill();
  characterIteration();
}

function chamgeSkill() {
  text(habilities[0], p1.x - 18, p1.y - 30);
  if (kb.pressing("q")) {
    //agua
    text(habilities[1], p1.x - 18, p1.y - 30);
    character = 1;//agua
  }
  if (kb.pressing("f")) {
    //fuego
    text(habilities[2], p1.x - 18, p1.y - 30);
    character = 2;//fuego
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
  text(habilities[character], p1.x - 27, p1.y - 30);
}

function Obstacle() {
  let Wobs, Fobs, Cobs, Bobs, Robs;
  Wobs = new waterObstacle.Sprite(windowWidth / 2 + 500, random(0, windowHeight), 50);
  Wobs.moveTowards(p1, 0.001);

  Wobs.addImage(waterObstacleimg);
}


function characterIteration() {
  text(vida, p1.x - 18, p1.y - 30)
  if (vida === 0) {
    p1.delete
  };
  if (p1.collides(waterObstacle)) {
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
  console.log(character);
}