let p1, Wobs;
let  fireObstacle, clouds, bolts, rocks;
let non = "a"
let habilities = [" ", "agua", "fuego", "viento", "electricidad", "tierra"]
let currentOption = null;
let windhuman, normalHuman;
let waterObstacleimg, fireObstacleimg, cloudsimg, boltsimg, rocksimg, p1img, p1fireUimg, p1fireLimg, p1fireRimg, p1fireBimg, p1waterimg, p1elecimg;
let character = 0;
let vida = 5;
let bricks, tilesGroup;
let shotsfire;
let windshots;
let cooldown = true;
let bullets;
let rockObstacle;
let floor;


function preload() {
  p1elecimg = loadImage("./imgs/electricidad/electricityUp.png")
  p1waterimg = loadImage("./imgs/water/waterUp.png")
  p1fireUimg = loadImage("./imgs/fire/firemanUp.png");
  p1fireLimg = loadImage("./imgs/fire/firemanLeft.png");
  p1fireRimg = loadImage("./imgs/fire/firemanRight.png");
  p1fireBimg = loadImage("./imgs/fire/firemanBack.png");
  p1img = loadImage("./imgs/human/humanRight.png");

  windshotsGroup = new Group();
  fireshotsGroup = new Group();
}

function setup() {
  new Canvas(windowWidth, windowHeight);
  p1 = new Sprite(80, 790, 50, 50);
  p1.width = 50;
  p1.height = 50;
  p1.addImage(p1img);
  p1.rotation = 0;

  floor = new Sprite(windowHeight,windowWidth,200,10);

  bricks = new Group();
  waterobs = new Group();
  waterobs.w = 50;
  waterobs.h = 50;
  waterobs.tile ="w"
  waterobs.vel.x = -2

	bricks.w = 90;
	bricks.h = 60;
	bricks.tile = '=';
  bricks.collider = "static"
	tilesGroup = new Tiles(
		[
      '==========..========',
			'=..................=',
      '=..................=',
			'===....=============',
			'=..................=',
			'=============..=====',
      '=..................=',
      '=..................=',
			'==.=================',
			'=..................=',
      '=..................=',
			'=============..=====',
			'...................=',
      '................w..=',
			'====================',
		],
		windowWidth / 3 -590,
		windowHeight / 4 -230,
		bricks.w,
		bricks.h,
    
	);
}

function draw() {
  background("gray")
  characterIteration();
  movement();
  changeCharacter();
}


function changeCharacter() {
  if (kb.pressing("f")) {
    //fire
    text(habilities[2], p1.x - 18, p1.y - 30);
    character = 2;
    p1.addImage(p1fireUimg);
  }

  if (kb.pressing("Shift")) {
    //humano
    text(habilities[0], p1.x - 18, p1.y - 30);
    character = 0;
    p1.addImage(p1img);
  }

  if (kb.pressing("r")) {
    //agua
    text(habilities[1], p1.x - 18, p1.y - 30);
    character = 1;
    p1.addImage(p1waterimg);
  }

  if (kb.pressing("v")) {
    //viento
    text(habilities[3], p1.x - 18, p1.y - 30);
    character = 3;//viento
    p1.addImage(windhuman);
  }

  if (kb.pressing("c")) {
    //electricidad
    text(habilities[4], p1.x - 27, p1.y - 30);
    character = 4;
    p1.addImage(p1elecimg);
  }
}

function movement() {
  if (kb.presses("left")) {
    p1.x -= 50;
    if (character == 2) {
      p1.addImage(p1fireLimg);
    }
  }
  if (kb.presses("right")) {
    p1.x += 50;
    if (character == 2) {
      p1.addImage(p1fireRimg);
    }
  }
  if (kb.presses("up")) {
    p1.y -= 50;
    if (character == 2) {
      p1.addImage(p1fireBimg);
    }
  }
  if (kb.presses("down")) {
    p1.y += 50;
    if (character == 2) {
      p1.addImage(p1fireUimg);
    }
  } 
  // if (kb.presses("q") && cooldown == true) {
  //   bullets = new Sprite(p1.x + 25, p1.y, 10, 4);
  //   bullets.vel.x = -9;
  //   cooldown = false;
  //   setTimeout(function () {
  //     cooldown = true;
  //   }, 1000);
  // }
}
function characterIteration() {
  if (vida === 0) {
    p1.remove();
  };
  if (p1.overlap (waterobs)){
if (character !== 1){
  vida --;
  waterobs.remove();
}else{
  waterobs.remove();
}
if (p1.y === windowHeight/2){
  console.log("doug");
  fireObstacle = new Sprite( p1.x,p1.y)
}
  }
   console.log(vida);
   console.log(character);
}

/*
  Links de cosas varias...
  https://p5play.org/learn/tiles.html
*/ 