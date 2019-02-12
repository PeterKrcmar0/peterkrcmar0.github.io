let colorSun, colorSky, colorMountain, colorMountain2;
let moonY, sunY;
let rot = 0;
let animation = false;
let x = 0;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('canvasContainer');
	smooth();
	noStroke();
	sunX = 300;
	sunY = 100 - height;
	colorSun = color(255, 255, 0);
	colorSky = color(200, 200, 255);
	colorMountain = color(100, 180, 100);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	if(animation){
		x = constrain(x+4, 0, width);
	} else if(mouseInsideCanvas()) x = mouseX;
	
	updateColors();
	updatePos();
	background(colorSky);
	fill(255, 255, 220);
	sc = map(x, 0, width, 30, 200);
	ellipse(width / 3, moonY, sc, sc);
	drawMountain();
	push();
	translate(width / 3, height);
	rotate(rot);
	fill(colorSun);
	sc = map(x, 0, width/2, 200, 250);
	ellipse(0, sunY, sc, sc);
	pop();
	drawClouds();
}

function updateColors() {
	colorSun = lerpColor(color(255, 210, 0), color(255, 0, 255), x / width);

	colorSky = lerpColor(color(200, 220, 255), color(0, 0, 50), x / width);

	colorMountain2 = lerpColor(color(80, 120, 80), color(50, 80, 50), x / width);
	
	colorMountain = lerpColor(color(120, 200, 120), color(60, 90, 60), x / width);
}

function updatePos() {
	rot = map(x, 0, width, 0, PI);
	moonY = map(x, 0, width, height + 100, 100);
}

function drawMountain() {
	
	mountain(width/3-100, 0);
	mountain(width/3, 50);
	mountain(100, 0);
	mountain(2*width/3, 0);
}

function mountain(xx, yy) {
	push();
	translate(xx, yy);
	fill(colorMountain);
	triangle(0, height, width/6, height - 300, width/4, height);
	fill(colorMountain2);
	triangle(250, height, width/6, height - 300, width/4, height);
	pop();
}

function drawClouds() {
	let a = map(x, 0, width, 0, 127);
	setGradient(0, 0, width, height, color(255, a), color(255,50), 1);
	
}

function mousePressed() {
	x = 0;
	animation = !animation;
}

function mouseInsideCanvas() {
	return mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height;
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis == 1) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == 2) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
  noStroke();
}