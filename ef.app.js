
function preload(){
    img = loadImage('ef.jpg');
  }
  
  
  function setup() {
    canvas = createCanvas(440, 420);
    canvas.center();
  }
  
  function draw(){
  image(img, 0, 200,  440, 420);
  fill("#FF000");
  text("LAMP 95%", 49, 315);
  text("WALL 92%", 200, 310);
  noFill();
  stroke("red");
  rect(160, 260, 150, 80);
  rect(40, 320, 50, 90);
  }
  
  
  