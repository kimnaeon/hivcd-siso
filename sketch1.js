let font,
  fontsize = 40;

let x = 1;
let y = 1;
let easing = 0.05;

let imgs = [];
let numimgs = 8;
let plate;

function preload() {
  img1=loadImage('r_apple.png');
  img2=loadImage('g_apple.png');
  img3=loadImage('y_apple.png');
  img4=loadImage('b_apple.png');
  img5=loadImage('nr_apple.png');
  img6=loadImage('ng_apple.png');
  img7=loadImage('ny_apple.png');
  img8=loadImage('ub_apple.png');
  imgs=[img1,img2,img3,img4,img5,img6,img7,img8];
  plate=loadImage('plate-01.png');

  font = loadFont('assets/NotoSansKR-Black.otf');
}

function setup() {
  createCanvas(1440, 720);
  background('#2bb673');
  image(plate,0,0);

  irotate = 0;
  imageMode(CENTER);
  angleMode(DEGREES);

  textFont(font);
  textSize(50);
  textAlign(CENTER, CENTER);
  
}

function draw() {
  textAlign(CENTER);
  drawWords(width * 0.5,height * 0.3);

  if (mouseIsPressed) {
    image(random(imgs), mouseX, mouseY, 150, 150);
  }
}

function drawWords(x) {

  fill(255);
  text('Click it!', x, 100);
  noStroke(0);
}
