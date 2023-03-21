let font,
  fontsize = 40;

let r,g,b;
let button;



function preload() {
  // setup()과 draw()를 호출하기에 앞서,
  // assets 파일 경로에 .ttf 또는 .otf 폰트가 저장 및 로드되었는지 확인하세요. 
  font = loadFont('assets/NotoSansKR-Black.otf');
  button = loadImage('nr_apple.png');
}

function setup() {
  createCanvas(1440, 720);

  // 텍스트 속성 설정
  textFont(font);
  textSize(400);
  textAlign(CENTER, CENTER);

}

function draw() {
  background('#2bb673');

  //
  image(button, width * 0.455, height * 0.4, button.width / 2.8, button.height / 2.8);

  //

  textAlign(CENTER);
  drawWords(width * 0.25,height * 0.5);
 
  textAlign(CENTER);
  drawWords(width * 0.75, height * 0.5);
}

function drawWords(x) {
  // text() 함수에는 세 개의 매개 변수가 필요합니다:
  // 그려질 텍스트, 가로 위치, 그리고 세로 위치
  fill(r,g,b);
  text('奈', x, 250);
  stroke(255,10,10);
  strokeWeight(10);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, width * 0.5, height * 0.45);
    if (d < 100) {
      r=255;
      g=10;
      b=10;
    } 
    if (d > 100) {
      r=43;
      g=182;
      b=115;
    } 
    else{
      r=255;
      g=10;
      b=10;
    }
  }

