let apple;

let font,
  fontsize = 40;

var yVal; 
var accel; 
var velocity; 
var mass; 


function preload() {
    font = loadFont('assets/NotoSansKR-Black.otf');
    apple = loadImage('ub_apple.png');
  }

function setup() {
  createCanvas(1440, 720);
  background(255);
  
  yVal = 0;  
  velocity = 0; 
  mass = 100; 
  
  accel = mass * 0.1; 

  textFont(font);
  textSize(20);
  textAlign(CENTER, CENTER);

}

function draw() {

    textAlign(CENTER);
    drawWords(width * 0.5,height * 0.5);
  
  velocity += accel; 
  yVal += velocity;
	image(apple,mouseX,yVal, mass,mass); 
  
  if (yVal > height - mass/2) {
    // A little dampening when hitting the bottom
    velocity *= -0.6;
    yVal = height - mass/2;
  }
}

function drawWords(x) {
    // text() 함수에는 세 개의 매개 변수가 필요합니다:
    // 그려질 텍스트, 가로 위치, 그리고 세로 위치
    fill('#2bb673');
    text('Gravitation is the force that has everything and attracts each other.', x, 250);
    noStroke();
  }


function mousePressed() {
  yVal = 0;  
  velocity = 0; 
}
