let prev;

function setup() {
  createCanvas(windowWidth, (windowWidth / 10) * 4);
  strokeWeight(4);
  stroke(0);
  noFill();

  prev = createVector();
}

function draw() {
  if (mouseIsPressed && !document.querySelector(".move:hover")) {
    line(prev.x, prev.y, mouseX, mouseY);
    prev.x = mouseX;
    prev.y = mouseY;
  }
}

function mousePressed() {
  prev.x = mouseX;
  prev.y = mouseY;
}
