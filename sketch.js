
function setup() {
      createCanvas(windowWidth,windowHeight);
        background(0, 0,255);
        frameRate(12);



}

function draw() {
    textSize(35);
    fill(random(256),random(256),random(256));
    textSize(random(120))
    text(char(random(33,126)),random(windowWidth),random(windowHeight));
    text(char(random(33,126)),mouseX,mouseY);

  }
  
  
  


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);

}

function mouseClicked(){
  background(0, 0,255);
}

