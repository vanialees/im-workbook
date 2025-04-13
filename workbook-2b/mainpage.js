let fonts = [];
let letters = [];

function preload() {
    console.log("STARTING PRELOAD")
  fonts[0] = loadFont("fonts/Anton-Regular.ttf");
  fonts[1] = loadFont("fonts/Apple-Braille.ttf");
  fonts[2] = loadFont("fonts/Roboto-Light.ttf");
  console.log("RUNNING PRELOAD")
}

function setup() {
  createCanvas(2000, 2000);
  angleMode(DEGREES);
  
}

function draw() {
  background('white');
  for (let i=letters.length-1; i >= 0; i--) {
    letters[i].update();
    letters[i].display();
    
    if (letters[i].offScreen() == true) {
      letters.splice(i, 1);
    }
  }
  
}

function mouseDragged() {
  letters.push(new Letter(mouseX, mouseY));
}


