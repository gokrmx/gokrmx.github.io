var zoff = 0;
let linku, linko;
let letrero;

function setup() {
  createCanvas(500, 400);
  rectMode(CENTER);
  strokeWeight(0.5);

  linku = createA('https://broozli.tumblr.com','Moodboard');
  linku.position(160, 290);
  linku.mouseOver(overL);
  linku.mouseOut(outL);
  linko = createA('https://www.instagram.com/gokrmx/','Contacto');
  linko.position(290, 290);

}

function draw() {
  background(255);
  stroke(0);
  fill(220);
  scale(1.2);
  this.escena(width / 100*43, height / 100 * 60);
}

function overL(){
linku.html('Reblogs');  
}
function outL(){
 linku.html('Moodboard'); 
}

function escena(x, y) {
  this.luna(x, y);
  this.nubes(x, y);
  this.edificio(x, y);
}


function luna(x, y) {
  push();
  translate(x - 60, y - 90);
  fill(240);
  beginShape();
  for (var i = 0; i < 360; i += 2) {
    var r = 95;
    var xpol = r * cos(radians(i));
    var ypol = r * sin(radians(i));
    vertex(xpol, ypol);
  }
  endShape(CLOSE);
  pop();
}

function nubes(x, y) {
  push();
  blendMode(DARKEST);
  translate(x, y);
  noFill();
  var yoff = 0;
  for (var j = -140; j < -35; j += 10) {
    var xoff = 0;
    for (var i = -175; i < 175; i += 10) {
      var noinois = map(sin(zoff), -1, 1, 50, 100);
      var hnois = map(noise(yoff, xoff, zoff), 0, 1, 0, 255);
      var alphanois = map(noise(xoff, yoff, zoff), 0, 1, -90, 90);
      var tama = map(noise(xoff, yoff, zoff + i), 0, 1, 1, 20);
      var lrpclr = map(noise(zoff), 0, 1, 0.33, 0.77);
      var a = color(224, 151, 34);
      var b = color(2, 69, 237);
      //colorMode(HSB);
      var interco = lerpColor(a, b, lrpclr);
      push();
      noStroke()
      //fill(inter, 100, 100, alphanois);
      fill(hnois, alphanois);
      translate(i, j);
      rect(0, 0, tama, tama);
      pop();
      xoff += 0.1;
      yoff += 0.02;

    }

  }
  zoff += 0.005;

  pop();
}

function edificio(x, y) {
  push();
  translate(x, y);
  this.rotoplas(65, -115);
  this.basurero(109, 18);
  this.escaleras(92, -74);
  this.cabina(-135, 28);
  this.poste(145, -56);

  //Edificio
  rect(0, 0, 218, 100);
  //Techo
  rect(50, -75, 80, 49);
  //Puertas
  rect(-51, 27, 62, 45);
  rect(51, 27, 62, 45);
  //Letreros
  rect(51, -5, 62, 13);
  rect(-51, -5, 62, 13);
  //antena
  rect(87, -130, 1, 60);
  //Banqueta
  strokeWeight(1);
  line(-160, 50, 160, 50);

  pop();
}

function cabina(x, y) {
  push();
  translate(x, y);
  rect(0, 0, 14, 23);
  rect(-8, 9, 2, 26);
  pop();
}

function poste(x, y) {
  push();
  translate(x, y);
  //poste
  rect(0, 0, 5, 211);
  //caja
  rect(-9, -84, 12, 28);
  //cables
  for (var py = -12; py <= 12; py += 4) {
    ellipse(7, -84 - py, 2, 2);
  }
  //lampara
  rect(0, -50, 24, 6);
  rect(0, -53, 28, 6);
  pop();

}

function rotoplas(x, y) {
  push();
  fill(90);
  translate(x, y);
  rect(0, -17, 15, 3);
  rect(0, 0, 31, 31);
  pop();
}

function escaleras(x, y) {
  push();
  translate(x, y);
  stroke(0);
  for (var i = -16; i < 16; i += 8) {
    rect(0, i, 3, 1)
  }
  for (var j = 0; j < 72; j += 8) {
    rect(19, j + 34, 3, 1)
  }
  pop();
}

function basurero(x, y) {
  push();
  translate(x, y);
  beginShape();
  vertex(0, 0);
  vertex(0, 32);
  vertex(24, 32);
  vertex(24, 6);
  endShape(CLOSE);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, 400);
}
