let pg
let img
let GTfont
let txt = "HOME"
let mySound

function preload() {
  GTfont = loadFont ('GT-Haptik-Bold.OTF');
  img = loadImage ('home2.jpg'); 
  pg = createGraphics(586, 810); 
  mySound = loadSound("siren.mp3");
}
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
}

function mousePressed() {
  if (mySound.isPlaying() ) { 
    mySound.stop();
    background("black");
  } else {
    mySound.play();
    background("red");
  } 
}

function draw() {

  pg.push();
  pg.image(img, 0, 0);
  pg.pop();

  pg.push();
  imageMode(CENTER);
  image(pg, width/2, height/2);
  pg.pop();

  fill("white");
  smooth();
  noStroke();
  textFont(GTfont);
  textSize(190);
  textAlign(CENTER);

  pg.push();
  let txtW = textWidth(txt);
  let spacing = txtW / txt.length;
  pg.pop();

  for(let i = 0; i < txt.length; i++){
    let c = txt.charAt(i);
    let offsetX = random(-spacing / 180, spacing / 180);
    let offsetY = random(-spacing / 180, spacing / 180);
    let startX = (width - txtW) / 2 + spacing / 2;
    let y = height / 2;
    text(c, startX + i * spacing + offsetX, y + offsetY);

  }
}

