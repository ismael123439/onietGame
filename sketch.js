let p1, Wobs;
let  waterobs,fireObstacle, clouds, bolts, rocks;
let non = "a"
let habilities = [" ", "agua", "fuego", "viento", "electricidad", "tierra"]
let currentOption = null;
let windhuman, normalHuman;
let waterObstacleimg, fireObstacleimg, cloudimg, boltsimg, rocksimg, p1img, p1fireUimg, p1fireLimg, p1fireRimg, p1fireBimg, p1waterimg, p1elecimg, bricksImg;
let character = 0;
let vida = 5;
let bricks, tilesGroup;
let shotsfire;
let windshots;
let cooldown = true;
let bullets;
let rockObstacle;
let floor;
let characterW = 40
let characterH = 40


function preload() {
  fireObstacleimg = ("./imgs/obstacles/fireobs.png")
  waterObstacleimg = ("./imgs/obstacles/waterobs.png")
  bricksImg = loadImage("./imgs/br.png")
  p1elecimg = loadImage("./imgs/electricidad/electricityUp.png")
  p1waterimg = loadImage("./imgs/water/waterUp.png")
  p1fireUimg = loadImage("./imgs/fire/firemanUp.png");
  p1fireLimg = loadImage("./imgs/fire/firemanLeft.png");
  p1fireRimg = loadImage("./imgs/fire/firemanRight.png");
  p1fireBimg = loadImage("./imgs/fire/firemanBack.png");
  cloudimg = loadImage("./imgs/cloud/cloud.png")
  p1img = loadImage("./imgs/human/humanRight.png");

  windshotsGroup = new Group();
  fireshotsGroup = new Group();
}

function setup() {
  new Canvas(windowWidth, windowHeight);
  p1 = new Sprite(80, 860, characterW, characterH);
  p1.addImage(p1img);
  p1.rotationlock = "true";

  fireObstacle = new Sprite(100,windowHeight/2+20,70,70);
  fireObstacle.visible = false;
  fireObstacle.addImage(fireObstacleimg);

  waterobs = new Sprite(windowWidth/2 +600,860,70,70);
  waterobs.vel.x = random(-5,-18);
  waterobs.addImage(waterObstacleimg);

  bricks = new Group();
	bricks.w = 90;
	bricks.h = 60;
	bricks.tile = '=';
  bricks.collider = "static"
  bricks.addImage(bricksImg);

  rock= new Group();
  rock.w = 50;
  rock.h = 130;
  rock.tile = "r"
  rock.collider = "static"
	tilesGroup = new Tiles(
		[
      '==========..========',
			'=..................=',
      '=..................=',
			'===....=============',
			'=..................=',
			'=============..=====',
      '=..................=',
      '=..........r.......=',
			'==.=================',
			'=..................=',
      '=..................=',
			'=============.======',
			'...................=',
      '...................=',
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
 // console.log(p1.x)
 text(vida,p1.x,p1.y)
}


function changeCharacter() {

  if (kb.pressing("Shift")) {
    //humano
    text(habilities[0], p1.x - 18, p1.y - 30);
    character = 0;
    p1.addImage(p1img);
  }

  if (kb.pressing("1")) {
    //agua
    text(habilities[1], p1.x - 18, p1.y - 30);
    character = 1;
    p1.addImage(p1waterimg);
  }
  if (kb.pressing("2")) {
    //fuego
    text(habilities[2], p1.x - 18, p1.y - 30);
    character = 2;
    p1.addImage(p1fireUimg);
  }

  if (kb.pressing("3")) {
    //viento
    text(habilities[3], p1.x - 18, p1.y - 30);
    character = 3;//viento
    p1.addImage(cloudimg);
    characterW = 1;
    characterH = 1;
  }

  if (kb.pressing("4")) {
    //electricidad
    text(habilities[4], p1.x - 27, p1.y - 30);
    character = 4;
    p1.addImage(p1elecimg);
  }
}

function movement() {
  if (kb.presses("left")) {
    p1.x -= 27;
    if (character == 2) {
      p1.addImage(p1fireLimg);
    }
  }
  if (kb.presses("right")) {
    p1.x += 27;
    if (character == 2) {
      p1.addImage(p1fireRimg);
    }
  }
  if (kb.presses("up")) {
    p1.y -= 27;
    if (character == 2) {
      p1.addImage(p1fireBimg);
    }
  }
  if (kb.presses("down")) {
    p1.y += 27;
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
  text(vida,p1.x,p1.y);
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
if (character == 2){
  vida--;
  vida--;
  waterobs.remove();
}
  }
  if (p1.y < windowHeight/2+50){
    fireObstacle.visible = true;
    fireObstacle.vel.x = random(5,18);
  }
  if (p1.overlap(fireObstacle)){
    if (character !== 2){
      vida --;
      fireObstacle.remove();
    }else{
      fireObstacle.remove();
    }
  }
  
  if(p1.overlap(rock)){
    vida=0;
  }

   console.log(vida);
   console.log(character);
}

/*
  Links de cosas varias...
  https://p5play.org/learn/tiles.html
*/ 