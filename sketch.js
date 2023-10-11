let p1;
let wall, wallceiling, wallFloor, WallLeft, WallRight;
let waterObstacle, fireObstacle, clouds, bolts,rocks;
let non = "a"
let habilities = [" ","agua", "fuego", "viento", "electricidad","tierra"]
let windhuman, normalHuman;
let waterObstacleimg,fireObstacleimg,cloudsimg,boltsimg,rocksimg;
let character;
let vida = 5;
let bricks, tilesGroup;
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




	bricks = new Group();
	bricks.w = 50;
	bricks.h = 50;
	bricks.tile = '=';

	tilesGroup = new Tiles(
		[
			'=====...======',
			'======..======',
			'==..==..==....',
			'==..==..==....',
			'======..=====.',
			'=====...======',
			'==..........==',
			'==..........==',
			'==......======',
			'==......=====.'
		],
		windowHeight,
		windowWidth,
		bricks.w + 1,
		bricks.h + 1
	);

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
    character = 1;//agua
  }
  if (kb.pressing("f")) {
    character = 2;//fuego
  }
  if (kb.pressing("v")) {
    character = 3;//viento
    p1.addImage(windhuman);
  }
  if (kb.pressing("e")) {

    character = 4; //electricidad
  }
  text(habilities[character], p1.x - 27, p1.y - 30);
}

function characterIteration() {
  text(vida, p1.x - 18, p1.y - 30)
  if (vida === 0) {
    p1.delete
  };
  if(p1.collides(waterObstacle) && character != 1){
  vida -= 1
  waterObstacle.collider='est'
} else {
  waterObstacle.collider='none'
}
 console.log(vida);
  console.log(character);

};
 
