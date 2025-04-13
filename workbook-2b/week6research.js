let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  background(0);
  noCursor(); // Hide the default cursor
  p = createP("'S' to save, 'SPACE' to clear");
  p.position(20, 20);
  p.style('color', 'white');
}

function draw() {
  // Draw the main line
  line(mouseX, mouseY, pmouseX, pmouseY);
  
  // Draw a mirrored line across the vertical center
  let mirrorX = width - mouseX;
  let prevMirrorX = width - pmouseX;
  line(mirrorX, mouseY, prevMirrorX, pmouseY);

  // White ball cursor at mouse
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 10, 10);

  // Optional: also show a white ball on the mirrored cursor
  ellipse(mirrorX, mouseY, 10, 10);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('fileName', 'png');
  }
  if (key === ' ') {
    background(0);
  }
}
