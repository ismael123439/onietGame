let p1;
let wall, wallceiling, wallFloor, WallLeft, WallRight;
let waterObstacle, fireObstacle, clouds, bolts,rocks;
let non = "a"
let habilities = [" ","agua", "fuego", "viento", "electricidad","tierra"]
let currentOption = null;
let windhuman, normalHuman;
let waterObstacleimg,fireObstacleimg,cloudsimg,boltsimg,rocksimg;
let character;
let vida = 5;
function preload() {
  windhuman = loadImage("./imgs/windhuman.png");
  normalHuman = loadImage("./imgs/human.png");
  waterObstacleimg = loadImage("./imgs/waterObstacle.png");
  // fireObstacleimg = loadImage("./imgs/fireObstacleimg.png");
  // cloudsimg = loadImage("./imgs/cloudsimg.png");
  // boltsimg = loadImage("./imgs/boltimg.png");
  // rocksimg = loadImage("./imgs/rocksimg.png");
}
function setup() {
  textSize(28);
  new Canvas();
  p1 = new Sprite(25, 25, 50, 50);
  //pared izquierda
  WallLeft = new Sprite(-50, 300, 100, 4000, "static")
  WallLeft.color = "#5F767B"
  //pared derecha
  WallRight = new Sprite(windowWidth + 51, 300, 100, 4000, "static")
  WallRight.color = "#5F767B"
  //techo
  wallceiling = new Sprite(windowWidth / 2, -51, windowWidth, 100, "static")
  wallceiling.color = "#5F767B"
  //piso
  wallFloor = new Sprite(windowWidth / 2, windowHeight + 50, windowWidth, 100, "static")
  wallFloor.color = "#5F767B"

  waterObstacle = new Group();
  //new Sprite(windowWidth/3,windowHeight/2,50,50);
  Obstacle();
  p1.rotationLock = true;
  waterObstacle.rotationLock = true;
}

function draw() {
  background("#5F767B");
  movement();
  addImages();
  chamgeSkill();
  characterIteration()
}

function movement() {
  if (kb.presses("left")) {
    p1.x -= 50;
  }
  if (kb.presses("right")) {
    p1.x += 50;
  }
  if (kb.presses("up")) {
    p1.y -= 50;
  }
  if (kb.presses("down")) {
    p1.y += 50;
  }
}


function addImages() {
  p1.addImage(normalHuman);
  waterObstacle.addImage(waterObstacleimg);
  // fireObstacle.addImage(fireObstacleimg);
  // clouds.addImage(cloudsimg);
  // boltsimg.addImage(boltimg);
  // rocks.addImage(rocksimg);

}

function Obstacle() {
  let Wobs,Fobs,Cobs,Bobs,Robs;

  Wobs = new waterObstacle.Sprite(windowWidth / 2 + 500,random(0,windowHeight), 50);
  Wobs.moveTowards(p1, 0.001);
  Wobs.addImage(waterObstacleimg);

  // Fobs = new waterObstacle.Sprite(windowWidth / 2 + 500,random(0,windowHeight), 50);
  // Fobs.moveTowards(p1, 0.001);
  // //Fobs.addImage(fireObstacleimg);
  
  // Cobs = new waterObstacle.Sprite(windowWidth / 2 + 500,random(0,windowHeight), 50);
  // Cobs.moveTowards(p1, 0.001);
  // //Cobs.addImage(cloudsimg);

  // Bobs = new waterObstacle.Sprite(windowWidth / 2 + 500, random(0,windowHeight), 50);
  // Bobs.moveTowards(p1, 0.001);
  // //Bobs.addImage(boltimg);

  // Robs = new waterObstacle.Sprite(windowWidth / 2 + 500, random(0,windowHeight), 50);
  // Robs.moveTowards(p1, 0.001);
  // //Robs.addImage(rocksimg);
}

function chamgeSkill() {
  text(habilities[0], p1.x - 18, p1.y - 30);
  if (kb.pressing("q")) {
    //agua
    text(habilities[1], p1.x - 18, p1.y - 30);
    character = 1;
  }
  if (kb.pressing("f")) {
    //fuego
    text(habilities[2], p1.x - 18, p1.y - 30);
    character = 2;
  }
  if (kb.pressing("v")) {
    //viento
    text(habilities[3], p1.x - 18, p1.y - 30);
    character = 3;
    p1.addImage(windhuman);
  }
  if (kb.pressing("e")) {
    //electricidad
    text(habilities[4], p1.x - 27, p1.y - 30);
    character = 4;
  }
}

function characterIteration() {
  text(vida, p1.x - 18, p1.y - 30)
  if (vida === 0) {
    p1.delete
  };
  if(p1.collides(waterObstacle)){
    if (character === 1) {
    p1.overlaps(waterObstacle);
  } else {
    vida -= 1
  } 
  }
  console.log(vida);
  console.log(character);
}


// if (kb.pressing("q")) {
//   //agua
//   text(habilities[0], p1.x - 18, p1.y - 30);
//   character = 1;
// }
// if (kb.pressing("f")) {
//   //fuego
//   text(habilities[1], p1.x - 18, p1.y - 30);
//   character = 2;
// }
// if (kb.pressing("v")) {
//   //viento
//   text(habilities[2], p1.x - 18, p1.y - 30);
//   character = 3;
//   p1.addImage(windhuman);
// }
// if (kb.pressing("e")) {
//   //electricidad
//   text(habilities[3], p1.x - 27, p1.y - 30);
//   character = 4;
// }
// }