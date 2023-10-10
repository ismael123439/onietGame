let p1;
let wall,wallceiling,wallFloor,WallLeft,WallRight;
let waterObstacle,fireObstacle,clouds,bolt;
let non = "a"
let water = "agua";
let fire = "fuego"
let wind = "viento"
let electricity = "electricidad"
let vida = 5;
let currentOption = null;
let windhuman,normalHuman;
let waterObstacleimg;
let character;

function preload() {
  windhuman = loadImage("./imgs/windhuman.png")
  normalHuman = loadImage("./imgs/human.png")
  waterObstacleimg = loadImage("./imgs/waterObstacle.png")
}
function setup() {
  textSize(28);
  new Canvas();
  p1 = new Sprite(25, 25, 50, 50);
    p1.rotationLock = true;
  //pared izquierda
  WallLeft= new Sprite (-50,300,100,4000,"static")
  WallLeft.color =  "#5F767B"
  //pared derecha
  WallRight= new Sprite (windowWidth+51,300,100,4000,"static")
  WallRight.color =  "#5F767B"
  //techo
  wallceiling= new Sprite (windowWidth/2,-51,windowWidth,100,"static")
    wallceiling.color =  "#5F767B"
  //piso
  wallFloor= new Sprite (windowWidth/2,windowHeight+50,windowWidth,100,"static")
  wallFloor.color =  "#5F767B"

  waterObstacle = new Group();
  //new Sprite(windowWidth/3,windowHeight/2,50,50);
  Obstacle()
}

function draw() {
  background("#5F767B");
  movement();
  addImages();
  changeskill();
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

function changeskill(){
  if (currentOption === "f") {
    text(fire, p1.x - 18, p1.y - 30);
    character = 1;
} else if (currentOption === "r") {
    text(wind, p1.x - 18, p1.y - 30);
    character = 2;
    p1.addImage(windhuman);
} else if (currentOption === "q") {
    text(water, p1.x - 18, p1.y - 30);
    character = 3;
} else if (currentOption === "e") {
    text(electricity, p1.x - 27, p1.y - 30);
    character = 4;
}
}
window.addEventListener("keydown", function (event) {
  const keyPressed = event.key;

  // Verifica si la tecla presionada es una de las opciones válidas
  if (["f", "r", "q", "e"].includes(keyPressed)) {
      currentOption = keyPressed;
      showCurrentOption();
  }
});

//  detecta cuando se sueltan las teclas
window.addEventListener("keyup", function () {
  currentOption = null;
  // Borra el texto existente del canvas
  clearCanvas();
});

function addImages(){
  p1.addImage(normalHuman);
  waterObstacle.addImage(waterObstacleimg)
}

function Obstacle(){
  let wobs;
  for (let i = 0; i < 70; i++) {
    wobs = new waterObstacle.Sprite(windowWidth / 3, windowHeight / 2, 50);
    wobs.moveTowards(p1, 0.001);
    wobs.addImage(waterObstacleimg);
  }
}