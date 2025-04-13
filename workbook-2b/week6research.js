//this sketch draws a circle pattern and paints a brush of trailing squares following the cursor//

function setup() {
    createCanvas(windowWidth, windowHeight/2)
    frameRate(5);
    background(0);
    text("drag ur mouse here", 150, 150);
    }
    function draw() {
    circleSize = random(100, 800);
    r = random(0);
    g = random(50);
    b = random(150);
    
    //r=map(mouseX, 0, width, 0, 255);
    fill(r,g,b, 20)
    textSize(45);
    //circle(width/2, height/2, mouseX);
    //circle(mouseX, mouseY, circleSize);
    square(mouseX, mouseY, circleSize);
    }