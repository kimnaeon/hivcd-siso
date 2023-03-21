let font,
  fontsize = 40;

let plate;

let img;

let x = 1;
let y = 1;

function preload(){
	font = loadFont('assets/NotoSansKR-Black.otf');
	plate=loadImage('round_plate.png');
	img=loadImage('half_l_apple.png');
}

function setup(){
	createCanvas(1440, 720);
	background(255);
	image(plate,0,0);

	imageMode(CENTER);

	textFont(font);
  	textSize(fontsize);
  	textAlign(CENTER, CENTER);
}

function draw(){

	textAlign(CENTER);
  	drawWords(width * 0.15,height * 0.5);

	textAlign(CENTER);
  	drawWords(width * 0.85,height * 0.5);

	  if (mouseIsPressed) {
		let d = dist(mouseX, mouseY, width * 0.15, height * 0.5);
		if (d < 100) {
			image(plate,width * 0.5,height * 0.5);
		} 
	}

	if (mouseIsPressed) {
		let d = dist(mouseX, mouseY, width * 0.85, height * 0.5);
		if (d < 100) {
			image(plate,width * 0.5,height * 0.5);
		} 
	}

	if (mouseIsPressed) {
		if (frameCount % 25 == 0) {
			push();
			translate(width*0.5, height*0.5);
			rotate(radians(frameCount));
			image(img, img.width / 2, img.height / 2,img.width / 1.5, img.height / 1.5);
			pop();
		}
	}
	
}

function drawWords(x) {
	// text() 함수에는 세 개의 매개 변수가 필요합니다:
	// 그려질 텍스트, 가로 위치, 그리고 세로 위치
	fill(0);
	text('eat!', x, 250);
	noStroke();
  }
