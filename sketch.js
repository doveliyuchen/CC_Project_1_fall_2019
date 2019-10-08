let cat;
function setup() {
  createCanvas(800, 800);
  
}

function draw() {
  background(220);
  noFill();
   cat = new Cat(mouseX, mouseY, 10);
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