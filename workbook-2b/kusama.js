// Declare an array
var points = []; 
var kusamaColours=[[255, 205, 0], "DodgerBlue", "pink", "lightgreen", "purple", "lightblue", "red"];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  noStroke(0);
  strokeWeight(4);
  stroke(51);
  frameRate(10);
}

function draw() {
  background("white");
  fill (random(kusamaColours));
  circle(random(width), random(height), random(60, 300));
  text("this is the YAYOI KUSAMA project", 750, 750);
  textSize(15);
  textStyle(ITALIC);
  
  // New location
  var point = {
    x: mouseX,
    y: mouseY
  }
  points.push(point); // Update the last spot in the array with the mouse location.

  if (points.length > 20) {
    points.splice(1,50);
  }
  
  // Draw everything
  for (var i = 0; i < points.length; i++) {
     // Draw an ellipse for each element in the arrays. 
     // Color and size are tied to the loop's counter: i.
    noStroke();
    fill(300-i*5);
    color(255,0,0)
    ellipse(points[i].x,points[i].y,i,i);
  }
}