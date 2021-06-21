var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(450, 400);  
  var b1 = createButton("Red");
  var b2 = createButton("Green")
  b1.position(150,175)
  b2.position(250,175)
  b1.mousePressed(cr)
  b2.mousePressed(cg)
}
function cr(){
  r = 255
  g = 0
  b = 0
}
function cg(){
  r = 0
  g = 255
  b = 0
}
function draw() {
  background(r,g,b);
}

