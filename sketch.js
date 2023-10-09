let p1;
let sk1;
let ip = "http://127.0.0.1:5500/"
let wall,wallceiling;
function preload() {
  //salet sk1 = loadImage("./assets/unnamed.png");
}
function setup() {
  new Canvas();
  p1 = new Sprite(25, 25, 50, 50);
    p1.rotation = 0;
  //pared izquierda
    wall= new Sprite (-50,300,100,4000,"static")
  wall.color =  "gray"
  //pared derecha
  wall= new Sprite (windowWidth+46,300,100,4000,"static")
  wall.color =  "gray"
  //techo
  wallceiling= new Sprite (windowWidth/2,-50,1277,100,"static")
    wallceiling.color =  "gray"
  //piso
    wal= new Sprite (windowWidth/2,windowHeight+50,1277,100,"static")
    wall.color =  "gray"
}

function draw() {
  background(800);
  movement();
  if (kb.pressing("q")) {
    movement();
  }
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

