function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    const col = {};
    const {r,g,b} = col;
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);
    fill(col.r,col.g,col.b)
    // shape(x-axis, y-axis, width, height)
    ellipse(mouseX, mouseY, 200, 200);
}
  