let x1, x2, y1, y2, diagX, diagY;
let speedX1, speedX2, speedY1, speedY2, speedDiagX, speedDiagY;
let titleSize = 30;
let growing = true;
let sizeCount = 0;

function setup() {
  createCanvas(400, 400);
  
  x1 = 150;  // left eye
  x2 = 250;  // right eye
  y1 = 210;  // left freckle
  y2 = 215;  // right freckle
  diagX = 200; // mouth
  diagY = 260;

  speedX1 = random(1, 3);
  speedX2 = random(1, 3);
  speedY1 = random(1, 3);
  speedY2 = random(1, 3);
  speedDiagX = random(1, 3);
  speedDiagY = random(1, 3);
}

function draw() {
  background(220);
  
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(x1, 160, 40, 20);
  fill(0, 100, 200);
  noStroke();
  ellipse(x1, 160, 15, 15);
  fill(0);
  ellipse(x1, 160, 5, 5);
  
  // Right eye
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(x2, 160, 40, 20);
  fill(0, 100, 200);
  noStroke();
  ellipse(x2, 160, 15, 15);
  fill(0);
  ellipse(x2, 160, 5, 5);
  
  // Eyebrows (static)
  fill(50, 30, 20);
  noStroke();
  rect(130, 120, 40, 10);
  rect(230, 120, 40, 10);
  
  // Update x1 and x2 (back and forth on X)
  x1 += speedX1;
  if (x1 > 170 || x1 < 130) speedX1 *= -1;
  
  x2 += speedX2;
  if (x2 > 270 || x2 < 230) speedX2 *= -1;
  
  stroke(150, 100, 80);
  strokeWeight(3);
  point(170, y1);
  point(230, y2);
  
  // Update y1 and y2
  y1 += speedY1;
  if (y1 > 230 || y1 < 190) speedY1 *= -1;
  
  y2 += speedY2;
  if (y2 > 235 || y2 < 195) speedY2 *= -1;
  
  noFill();
  stroke(200, 50, 50);
  strokeWeight(3);
  ellipse(diagX, diagY, 40, 10);
  
  diagX += speedDiagX;
  diagY += speedDiagY;
  if (diagX > 220 || diagX < 180) speedDiagX *= -1;
  if (diagY > 280 || diagY < 240) speedDiagY *= -1;
  
  fill(240, 200, 180);
  stroke(0);
  strokeWeight(1);
  triangle(200, 180, 190, 220, 210, 220);
  
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
  
  textSize(titleSize);
  text('Dans Portrait', 10, 30);

  if (growing) {
    titleSize += 2;
    sizeCount++;
    if (sizeCount >= 5) {
      growing = false;
      sizeCount = 0;
    }
  } else {
    titleSize -= 2;
    sizeCount++;
    if (sizeCount >= 5) {
      growing = true;
      sizeCount = 0;
    }
  }
  if (titleSize < 20) titleSize = 20;
  if (titleSize > 50) titleSize = 50;
  
  textSize(16);
  text('Dan Upton', 250, 380);
  
}