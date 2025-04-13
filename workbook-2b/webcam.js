var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(800, 800);
  capture.hide();
  
  noStroke();
  fill(0);
}

function draw() {
  background(0,0,0);
  capture.loadPixels();
  var stepSize = round(constrain(mouseX / 8, 6, 32));
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      //var darkness = int(map(capture.pixels[i*4]/255,0,255,0,1));
      var darkness = ( capture.pixels[i*4]) / 255;
			fill(255);
      // fill(255,capture.pixels[i*4 + 1],capture.pixels[i*4 + 2]);
      var radius = stepSize * darkness;
      rect(x, y, radius, radius);
    }
  }
}