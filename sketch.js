function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  textSize(18);
  fill(0);
  text(hr + ':' + mn + ':' + sc, 20, 50);
  
  
  translate(200, 200);
  rotate(-90);
  
  strokeWeight(8);
  stroke(255, 104, 150);
  noFill();
  let end1 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, end1);
  
  push();
  rotate(end1);
  stroke(255, 104, 150);
  line(0, 0, 100, 0);
  pop();
  
  stroke(155, 100, 240);
  let end2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, end2);
  
  push();
  rotate(end2);
  stroke(155, 100, 240);
  line(0, 0, 100, 0);
  pop();
  
  stroke(40, 255, 240);
  let end3 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, end3);
  
  push();
  rotate(end3);
  stroke(40, 255, 240);
  line(0, 0, 100, 0);
  pop();
  
  
 
}