
function preload(){
    img = loadImage('cd.jpg');
  }
  
  
  function setup() {
    canvas = createCanvas(440, 420);
    canvas.center();
  }
  
  function draw(){
  image(img, 0, 200,  440, 420);
  fill("#FF000");
  text("FAN 95%", 169, 250);
  text("AC 92%", 247, 335);
  noFill();
  stroke("red");
  rect(160, 260, 80, 80);
  rect(234, 340, 70, 50);
  }
  
  
  