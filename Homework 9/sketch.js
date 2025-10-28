function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  ellipse(200, 200, 200, 250);

  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(150, 160, 40, 20);
  ellipse(250, 160, 40, 20);
  fill(0, 100, 200);
  noStroke();
  ellipse(150, 160, 15, 15);
  ellipse(250, 160, 15, 15);
  fill(0);
  ellipse(150, 160, 5, 5);
  ellipse(250, 160, 5, 5);

  fill(50, 30, 20);
  noStroke();
  rect(130, 120, 40, 10);
  rect(230, 120, 40, 10);

  fill(240, 200, 180);
  stroke(0);
  strokeWeight(1);
  triangle(200, 180, 190, 220, 210, 220);

  noFill();
  stroke(200, 50, 50);
  strokeWeight(3);
  ellipse(200, 260, 40, 10);

  fill(30, 20, 10);
  noStroke();
  rect(120, 60, 160, 50);
  rect(90, 80, 30, 100);
  rect(280, 80, 30, 100);
  stroke(30, 20, 10);
  strokeWeight(2);
  for (let x = 130; x <= 270; x += 10) {
    line(x, 50, x, 100);
  }

  stroke(150, 100, 80);
  strokeWeight(3);
  point(170, 210);
  point(180, 215);
  point(230, 210);
  point(240, 215);
  
  textSize(30)
  text('Dans Portrait',10,30);
  text('Dan Upton', 250, 380)
       
  noLoop();
}