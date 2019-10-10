let cat;
function setup() {
  createCanvas(800, 800);
  
}

function draw() {
  background(220);
  noFill();
   cat = new Cat(mouseX, mouseY, 10);
   cute = new Cute();
   cute.display();
  cat.display();
}

class Cat {

  constructor(x, y, a) {

    this.x = x/a*5;
    this.y = y/a*5;
    this.a = a;

  }
  display() {
     scale(this.a / 5);


    //this.kuohao();
    this.omiga();
    this.eye();
    this.ear();
    this.zhuazi();
  }
 kuohao() {
 
    arc(this.x - 100, this.y, 80, 120, 2.3, 4.1)

    arc(this.x + 100, this.y, 80, 120, 5.32, 0.84)
}

 omiga() {

    strokeWeight(4);
    arc(this.x - 8, this.y, 15, 20, 0, 3 * PI / 2)
    arc(this.x + 8, this.y, 15, 20, 3 * PI / 2, PI)
}
 eye() {

    strokeWeight(4);
    ellipse(this.x - 30, this.y - 5, 5, 10);
    ellipse(this.x + 30, this.y - 5, 5, 10);
}
ear() {

    noStroke();

    fill('#FFACC2');
    triangle(this.x - 50, this.y - 25, this.x - 70, this.y - 45, this.x - 80, this.y - 15)
    triangle(this.x + 50, this.y - 25, this.x + 70, this.y - 45, this.x + 80, this.y - 15)
    strokeWeight(4);
    stroke(0);
    line(this.x - 50, this.y - 25, this.x - 70, this.y - 45)
    line(this.x - 80, this.y - 15, this.x - 70, this.y - 45)
    line(this.x + 50, this.y - 25, this.x + 70, this.y - 45)
    line(this.x + 80, this.y - 15, this.x + 70, this.y - 45)

  }
  zhuazi() {
    noFill()
    arc(this.x - 100, this.y, 30, 30, PI, 2 * PI)
    arc(this.x + 100, this.y, 30, 30, PI, 2 * PI)
    ellipse(this.x - 100, this.y + 5, 15, 15)
    ellipse(this.x + 100, this.y + 5, 15, 15)
    line(this.x - 108, this.y - 8, this.x - 110, this.y - 20)
    line(this.x - 100, this.y - 10, this.x - 100, this.y - 22)
    line(this.x - 92, this.y - 8, this.x - 90, this.y - 20)
    line(this.x + 108, this.y - 8, this.x + 110, this.y - 20)
    line(this.x + 100, this.y - 10, this.x + 100, this.y - 22)
    line(this.x + 92, this.y - 8, this.x + 90, this.y - 20)


  }


}
class Map {
   constructor() {
  }

display() {

}



}

class Cute{


 display(){
  background(220);
  this.weiba();
  this.body();
  this.whiteBody();
  this.bluePart();
  this.ears();
  this.head();

}

 weiba() {
  strokeWeight(6);
  beginShape();
  //vertex(477, 438);
  vertex(433, 458);
  bezierVertex(492, 433, 496, 453, 484, 463);
  vertex(433, 494);
  fill("#ffffd9");
  stroke("#33190c");
  endShape();
}

 body() {
  beginShape();
  vertex(255, 392);
  vertex(255, 526);
  bezierVertex(256, 555, 282, 557, 293, 530);

  vertex(383, 530);
  bezierVertex(392, 557, 419, 558, 428, 526);
  vertex(428, 526);
  quadraticVertex(434, 523, 430, 393);
  vertex(430, 393);
  endShape();
}

 whiteBody() {
  beginShape();
  fill(255);
  vertex(317, 501);
  quadraticVertex(345, 504, 363, 500);
  vertex(363, 500);
  quadraticVertex(386, 492, 389, 480);
  vertex(389, 480);
  quadraticVertex(393, 469, 396, 437);
  vertex(396, 437);

  endShape();


}

 bluePart() {

  fill("#e5f8ef");
  beginShape();
  vertex(428, 459);
  bezierVertex(407, 456, 405, 479, 421, 482);
  vertex(421, 482);
  bezierVertex(393, 482, 394, 507, 427, 511);
  vertex(427, 511);
  quadraticVertex(429, 485, 428, 459);
  vertex(428, 459);
  endShape();
}

 ears() {
  //        左边耳朵
  stroke("#33190c");
  fill("#ffffd9");
  strokeWeight(4);
  beginShape();
  vertex(106, 79);
  quadraticVertex(114, 4, 209, 14);
  endShape();

  //        右边耳朵
  beginShape();
  strokeWeight(5);

  vertex(376, 14);
  quadraticVertex(431, 13, 446, 15);
  //vertex(446,15);
  quadraticVertex(488, 20, 498, 48);
  //vertex(498,48);
  quadraticVertex(508, 75, 512, 110);

  endShape();


  beginShape();
  strokeWeight(8);
  vertex(470, 65);
  vertex(483, 27);
  endShape();

  beginShape();
  fill("#fecce5");
  vertex(473, 65);
  vertex(483, 30);

  bezierVertex(502, 46, 496, 60, 512, 110);
  //vertex(512, 110);
  endShape();


}
//头
 head() {
  strokeWeight(10);
  stroke("#33190c");
  beginShape();
  fill("#ffffd9")

  vertex(280, 6);
  bezierVertex(476, 0, 535, 154, 541, 166);
  vertex(541, 166);
  vertex(546, 180);
  bezierVertex(584, 304, 530, 368, 432, 392);
  endShape();
  beginShape();
  vertex(432, 392);
  quadraticVertex(210, 460, 90, 372);
  //vertex(90,372)
  quadraticVertex(38, 324, 34, 314);
  //vertex(34,314);
  quadraticVertex(1, 268, 38, 174);
  //vertex(38,174);
  quadraticVertex(128, 8, 280, 6);

  endShape();


}



}