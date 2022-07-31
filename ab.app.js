
function preload(){
    img = loadImage('ab.jpg');
  }
  
  
  function setup() {
    canvas = createCanvas(440, 420);
    canvas.center();
  }
  
  function draw(){
  image(img, 0, 200,  440, 420);
  fill("#FF000");
  text("CHAIR 95%", 69, 260);
  text("TABLE 92%", 257, 290);
  noFill();
  stroke("red");
  rect(60, 240, 150, 150);
  rect(234, 260, 150, 150);
  }
  
  
  