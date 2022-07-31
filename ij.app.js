
function preload(){
    img = loadImage('ij.jpg');
  }
  
  
  function setup() {
    canvas = createCanvas(440, 420);
    canvas.center();
  }
  
  function draw(){
  image(img, 0, 200,  440, 420);
  fill("#FF000");
  text("DRAWER 95%", 49, 350);
  text("WASH BASIN 92%", 190, 310);
  noFill();
  stroke("red");
  rect(160, 260, 150, 80);
  rect(40, 360, 180, 50);
  }
  
  
  