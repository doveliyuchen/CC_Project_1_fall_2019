let cat;
let cute;
let ma;
let xpos = 235;
let ypos = 16;
let t = 0;
let a = 0;
let b = 0;
let c = 0;



function setup() {
  createCanvas(800, 800);
  angleMode(RADIANS);

}

function draw() {

  stroke(0);
  background(220);
  noFill();
   cat = new Cat(400, 400, 10);

   cat.display();
  

 
  if (millis() > 5000 && millis() < 6000) {
    background(220);
    cat.display1();
  }

  if (millis() > 7000) {
    aa();

  }

}

function aa() {

  ma = new Ma();
  cute = new Cute(xpos, ypos, 0.3);
  ma.display();
  cute.display();
  xpos = 235 - 30 * t
  t = t + 0.02
  ypos = 16 + 25 * a
  a = a + 0.02
  if (t > 5.1 / 1.015) {
    xpos = 235 - 30 * t + 45 * b
    b = b + 0.02

  }

  if (ypos > 800) {
    t = 0;
    a = 0;
    b = 0;
  }
}


class Cat {

  constructor(x, y, a) {

    this.x = x/a*5;
    this.y = y/a*5;
    this.a = a;

  }
  display() {
     push();
     scale(this.a / 5);


    //this.kuohao();
    this.omiga();
    this.eye();
    this.ear();
    this.zhuazi();
    pop();
  }
   display1() {
    scale(this.a / 5);
    this.omiga();
    this.eye1();
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
      push();
    strokeWeight(2);
    line(this.x - 30, this.y - 10, this.x - 35, this.y - 12);
    line(this.x + 30, this.y - 10, this.x + 25, this.y - 12);
    pop();
  }
eye1() {

    strokeWeight(4);
    ellipse(this.x - 30, this.y - 5, 5, 10);
    //ellipse(this.x + 30, this.y - 5, 5, 10);
    line(this.x + 25, this.y - 5, this.x + 35, this.y - 5);
    push();
    strokeWeight(2);
    line(this.x - 30, this.y - 10, this.x - 35, this.y - 12);
    line(this.x + 25, this.y - 5, this.x + 20, this.y - 7);
    pop();
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
     push();
    fill('#FFACC2');
    ellipse(this.x - 100, this.y + 5, 15, 15)
    ellipse(this.x + 100, this.y + 5, 15, 15)
       pop();
    line(this.x - 108, this.y - 8, this.x - 110, this.y - 20)
    line(this.x - 100, this.y - 10, this.x - 100, this.y - 22)
    line(this.x - 92, this.y - 8, this.x - 90, this.y - 20)
    line(this.x + 108, this.y - 8, this.x + 110, this.y - 20)
    line(this.x + 100, this.y - 10, this.x + 100, this.y - 22)
    line(this.x + 92, this.y - 8, this.x + 90, this.y - 20)
    line(this.x - 115, this.y + 15, this.x - 115, this.y);
    line(this.x - 85, this.y + 15, this.x - 85, this.y);
    line(this.x + 115, this.y + 15, this.x + 115, this.y);
    line(this.x + 85, this.y + 15, this.x + 85, this.y);



  }


}
class Ma {


 display() {
    noStroke();
    push()
    background('#69C5FF');
    fill('#FF7B3D');
    ellipse(800, 0, 200, 200)
    beginShape();
    fill('#7BFF73');
    vertex(0, 200);
    quadraticVertex(200, 100, 400, 200);
    quadraticVertex(600, 100, 800, 200);
    endShape();
    noStroke();
    rect(0, 200, 800, 600);
    beginShape();
    noFill();

    vertex(240, 150);
    vertex(200, 200);
    fill('#8F6750');
    quadraticVertex(100, 350, 200, 500);
    vertex(400, 500);
    quadraticVertex(100, 350, 400, 200);

    endShape();
    beginShape();
    vertex(240, 150);
    quadraticVertex(420, 190, 400, 200);
    endShape();
    beginShape();

    vertex(400, 500);

    quadraticVertex(600, 700, 700, 800);
    vertex(100, 800)
    quadraticVertex(400, 700, 200, 500);
    endShape();
    pop();

  }



}

class Cute{
 constructor(x,y,a) {
     this.x=x;
     this.y=y;
     this.a=a;
  }

 display(){
  push();
  scale(this.a);
  translate(this.x/this.a,this.y/this.a)

  this.weiba();
  this.body();
  this.whiteBody();
  this.bluePart();
  this.ears();
  this.head();
  this.beard();
  this.eyebro();
  this.etou();
  this.pinky();
  this.eye();
  this.nose();
  this.heart();
  this.hands();
  pop();

}
//tail
 weiba() {
  strokeWeight(6);
  beginShape();
  vertex(433, 458);
  bezierVertex(492, 433, 496, 453, 484, 463);
  vertex(433, 494);
  fill("#ffffd9");
  stroke("#33190c");
  endShape();
}
//body
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
//white part
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
//more parts of body
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
  //        left ear
  stroke("#33190c");
  fill("#ffffd9");
  strokeWeight(4);
  beginShape();
  vertex(106, 79);
  quadraticVertex(114, 4, 209, 14);
  endShape();

  //        right ear
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
//head
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

 beard() {
  stroke("#33190c");
  //left 
  strokeWeight(7);
  beginShape();
  vertex(23, 212);
  vertex(7, 211);
  endShape();
  beginShape();
  vertex(15, 246);
  vertex(6, 245);
  endShape();
  beginShape();
  vertex(17, 281);
  vertex(9, 282);
  endShape();
  //right
  strokeWeight(10);
  beginShape();
  vertex(530, 233);
  vertex(596, 246);
  endShape();
  beginShape();
  vertex(526, 263);
  vertex(587, 290);
  endShape();
  beginShape()
  vertex(524, 298);
  vertex(581, 331);
  endShape();
}


eyebro() {

  //left eye brow
  strokeWeight(5);
  beginShape();
  vertex(163, 40);
  vertex(182, 42);
  vertex(182, 42);
  quadraticVertex(185, 42, 180, 42);
  endShape();
  //right eyebrow
  beginShape();
  strokeWeight(6);
  vertex(374, 54);
  quadraticVertex(386, 43, 396, 57);
  endShape();
  beginShape();
  vertex(375, 54);
  quadraticVertex(372, 56, 376, 53);
  endShape();
  beginShape();
  vertex(395, 56);
  quadraticVertex(397, 58, 395, 56);
  endShape();

}
//blue on head
 etou() {
  fill("#e5f8ef");
  noStroke();
  beginShape();
  vertex(190, 30);
  bezierVertex(180, 57, 216, 65, 218, 20);
  quadraticVertex(203, 23, 190, 30);
  endShape();

  beginShape();
  vertex(239, 15);
  bezierVertex(233, 70, 280, 60, 278, 11);
  quadraticVertex(257, 11, 239, 15);
  endShape();

  beginShape();
  vertex(304, 11);
  bezierVertex(285, 48, 329, 74, 339, 15);
  quadraticVertex(322, 11, 304, 11);
  endShape();

  beginShape();
  vertex(365, 20);
  bezierVertex(354, 47, 380, 53, 389, 28);
  quadraticVertex(378, 23, 366, 20);
  endShape();


}
//left pinky
 pinky() {
  fill("#ffcce6");
  beginShape();
  vertex(110, 199);
  quadraticVertex(73, 179, 47, 198);
  vertex(47, 215);
  quadraticVertex(73, 235, 120, 212);
  endShape();

  beginShape();
  vertex(47, 198)
  bezierVertex(41, 204, 43, 211, 47, 215);
  endShape();

  //right pinky
  beginShape();
  vertex(428, 200);
  quadraticVertex(470, 186, 507, 210);
  vertex(497, 244);
  quadraticVertex(454, 256, 420, 227);
  endShape();
  beginShape();
  vertex(507, 210);
  bezierVertex(519, 218, 514, 240, 497, 244);
  endShape();

  //lines to be shy left
  stroke("#361909");
  strokeWeight(6);
  beginShape();
  vertex(71, 205);
  vertex(65, 212);
  endShape();
  beginShape();
  vertex(88, 205);
  bezierVertex(90, 202, 91, 202, 88, 205);
  bezierVertex(80, 215, 78, 216, 82, 212);
  endShape();
  //lines to be shy right
  beginShape();
  vertex(448, 218);
  vertex(443, 224);
  vertex(448, 218);
  bezierVertex(452, 213, 454, 215, 444, 224);
  endShape();
  beginShape();
  vertex(443, 224);
  bezierVertex(441, 225, 439, 230, 444, 224);
  endShape()
  beginShape();
  vertex(466, 218);
  vertex(460, 225);
  vertex(466, 219)
  bezierVertex(468, 215, 469, 216, 465, 219);
  endShape();
  beginShape();
  vertex(460, 225);
  bezierVertex(455, 230, 455, 231, 460, 225);
  endShape();
  beginShape();
  vertex(482, 220);
  vertex(475, 228);
  vertex(482, 221);
  bezierVertex(484, 216, 484, 219, 481, 221);
  vertex(476, 227);
  bezierVertex(472, 231, 472, 231, 476, 227);
  endShape();
}

 eye() {
  //left eye
  fill("#35190d");
  beginShape();
  vertex(129, 140);
  bezierVertex(206, 118, 215, 204, 172, 226);
  bezierVertex(92, 249, 85, 165, 129, 140);
  endShape();

  //right eye
  beginShape();
  vertex(332, 154);
  bezierVertex(421, 108, 462, 208, 407, 240);
  bezierVertex(357, 279, 264, 214, 332, 154);
  endShape();



  //eyelash left
  stroke("#35190d");
  strokeWeight(6);
  beginShape();
  vertex(129, 146);
  vertex(129, 131);
  endShape();

  //eyelash right
  beginShape();
  vertex(334, 156);
  vertex(328, 146);
  endShape();


  //eye highlight left
  fill(255);
  beginShape();
  vertex(177, 151);
  bezierVertex(190, 152, 183, 166, 177, 164);
  bezierVertex(168, 164, 168, 152, 177, 151);
  endShape();

  //eye highlight right
  beginShape();
  vertex(393, 154);
  bezierVertex(406, 155, 402, 171, 393, 169);
  bezierVertex(384, 169, 382, 155, 393, 154);
  endShape();

}

 nose() {

  //nose

  beginShape();
  fill("#35190e");
  vertex(237, 220);
  bezierVertex(237, 209, 254, 209, 254, 220);
  bezierVertex(254, 231, 238, 231, 237, 220);
  endShape();
  noFill()
  strokeWeight(4);
  arc(230, 225, 25, 40, 0, 3 * PI / 3 - 1)
  arc(255, 225, 25, 40, 0 + 1, PI)


}

 heart() {
  //heart
  stroke("#33190c");
  fill("#fe0000");
  strokeWeight(10);
  beginShape();
  vertex(98, 376);
  bezierVertex(70, 301, 156, 194, 246, 303);
  bezierVertex(403, 197, 476, 345, 424, 402);
  endShape();
  beginShape();
  vertex(424, 402);
  quadraticVertex(375, 475, 260, 528);
  quadraticVertex(247, 536, 225, 526);
  quadraticVertex(130, 463, 98, 376);
  endShape();


  //less red inside the heart 
  fill("#ff334c");
  noStroke();
  beginShape();
  vertex(109, 372);
  bezierVertex(68, 240, 214, 226, 236, 326);
  endShape();
  beginShape();
  vertex(236, 326);
  quadraticVertex(297, 250, 384, 278);
  quadraticVertex(408, 288, 404, 316);
  quadraticVertex(380, 416, 263, 469);
  vertex(202, 464);
  quadraticVertex(118, 416, 109, 372);
  endShape();
  beginShape();
  vertex(263, 469);
  bezierVertex(241, 480, 220, 470, 202, 464);
  endShape();


}
 hands() {
  //left hand
  stroke("#33190c");
  fill("#ffffd9");
  strokeWeight(6);
  beginShape();
  vertex(93, 377);
  bezierVertex(132, 367, 128, 417, 113, 415);
  bezierVertex(92, 418, 74, 390, 98, 377);
  endShape();

  //right hand
  beginShape();
  vertex(395, 434);
  bezierVertex(363, 407, 394, 366, 429, 388);
  vertex(432, 388);
  quadraticVertex(421, 409, 393, 435);
  endShape();

}

}