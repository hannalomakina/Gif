//The setup function only happens once
var
sandy=20;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  noCursor();

}

//The draw function happens over and over again
function draw() {
  //an RGB color for the canvas' background
  //circle
  background(173,216,230); 
  stroke(255,255,127,120);
  strokeWeight(1);
  fill(255,255,127,100);
  ellipse(random(width),random(height),20,20);
  stroke(255,255,127); // an RGB color for the circle's border
  strokeWeight(mouseY);
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,mouseY/2,mouseY/2); // center of canvas, 20px dia
  fill(sandy,218,252);
  strokeCap(ROUND);
  strokeWeight(1);
  triangle (500,500,0,500,mouseX,mouseY);
  stroke(255,255,127); // an RGB color for the circle's border
  strokeWeight(1);
  fill(255,255,127); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,20,20);

}

function mousePressed(){
  if (sandy>=225) {
    sandy=0;
}else{
    sandy=sandy+20;
  }
}
