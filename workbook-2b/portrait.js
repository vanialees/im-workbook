function setup() {
  createCanvas(windowWidth, windowHeight);
}

//PRINT X AND Y LOCATION WHEN MOUSE IS CLICKED
function mouseClicked(){
console.log(mouseX,mouseY); 

}


function draw() {

//DEFINE HAIR & SKIN COLOR VARIABLES 
let skin = color(245,230,196);
let hair = color('black');

angleMode(DEGREES);
background('white');
//text("VANIA LEE", 600, 750);
textSize(15)

//SET VARIABLES X AND Y FOR BACKGROUND PATTERN SHAPES

for( var x = 0; x < windowWidth ; x = x+windowWidth){
for (var y = 0 ; y < windowHeight ; y = y+windowHeight){ 
 noStroke();
 //fill('pink');
 ellipse(x,y,50);
 circle(mouseX, mouseY, 200);
 }
}

//HAIR
fill(hair);
rect(150,50,600,400,120);
fill(255);


//FACE
fill(skin);
ellipse(300,220,250,300);

//BANGS
fill(hair);
arc(300,180,240,220,180,0, CHORD);
fill(skin);
triangle(260,190,300,110,350,190);
fill(hair);
triangle(175,215,178,150,266,179);
triangle(343,180,424,175,426,215);

//EARS
fill(skin);
ellipse(180,260,40);
ellipse(420,260,40);

//EYES
noStroke();
fill(59,59,59);
ellipse(250,220,25);
ellipse(350,220,25);

function keyPressed() {
  background(random, 255)
}


//NOSE RING
//noFill();
//stroke(color(silver));
//arc(315,264,10,10,180,110,OPEN);

//MOUTH
fill(221,99,131);
noStroke();
arc(300,300,60,30,0,180,CHORD);

fill(mouseX/4, mouseY/2, mouseX/2);
circle(mouseX, mouseY, 100);

function mousePressed(){
background(random("pink"), random("white"), random("lightbl"));
}
}