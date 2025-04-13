const pointsH = 20
const pointsV = 20

function setup() {
  createCanvas(windowWidth, windowHeight /2);
}

function draw() {
  background(0);
  
  const h = width / pointsH
  const v = height / pointsV
  
  translate(5, 5)
  for (let x = 0; x < width; x += h) {
    for(let y = 0; y < height; y += v) {
      
      stroke(150)
      //rect(x-2.5, y-2.5, 5, 5)
      stroke(255, 255, 255, 50)
      if ((mouseX >= width || mouseX <= 0) || (mouseY <= 0 || mouseY >= height)) {
        line(x, y, width/2, height/2)
      } else {
        line(x, y, mouseX, mouseY)
      }
    }
  }
  
  
}