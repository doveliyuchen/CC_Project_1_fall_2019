function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  noFill();
  push();
  translate(60,150);
  kuohao();
  pop();
  omiga();
  eye();
}


function kuohao() {
  arc(200,200,100,180,2.3,4.1)
  translate(400,400);
  rotate(PI);
  arc(0,200,100,180,2.19,3.98)
}

function omiga() {
  strokeWeight(4);
  arc(350,350,20,30,0,3*PI/2)
  arc(370,350,20,30,3*PI/2,PI)
}
function eye() {
  strokeWeight(4);
  ellipse(330,345,5,5);
  ellipse(390,345,5,5);
}
// function ear() {
//   triangle(310,345,
