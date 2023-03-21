let greenapple;
let greentexture;
let tx;


function preload() {
  greenapple = loadModel('apple3d.obj', true);
  greentexture = loadImage('greenapple.png',true);

  text("APPLE",CENTER,CENTER);
}

function setup() {
    createCanvas(1440, 720, WEBGL);
    describe();

    textScreen = createGraphics(400,400)
    textScreen.text("",CENTER,100)
  }
  
  function draw() {
    background(255,10,10);

    ambientLight(200, 100, 100);
    directionalLight(100, 200, 200, 10, 10, -1)

    orbitControl(3)
    drawingContext.disable(drawingContext.DEPTH_TEST)
    drawingContext.enable(drawingContext.BLEND)
    image(textScreen, -width/2, -height/2)
    drawingContext.enable(drawingContext.DEPTH_TEST)


    scale(2.5); // Scaled to make model fit into canvas
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(250, 0, 0);
    normalMaterial();
    texture(greentexture);
    model(greenapple);
    pop();

  }
  