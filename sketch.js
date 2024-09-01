function setup() {
    createCanvas(600, 600);
  background("gray");
  }
  function draw() {
    stroke("yellow");
    fill("green");
    
   
   if(mouseIsPressed) {
     rect(mouseX, mouseY, 25, 35);
   }
    
  }