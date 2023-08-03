// Positions of centers of circles
let xPos1 = 100;
let yPos1 = 100;
let xPos2 = 300;
let yPos2 = 300;

function setup() {
    createCanvas(400, 400);
    stroke(0, 255, 255);
}

function draw() {
    background(0);
    
    // Calculate the distance between the two center points
    let distance = dist(xPos1, yPos1, xPos2, yPos2);

    // Color the circles based on the distance
    if (distance < 200) {
        fill(255, 0, 0); // Red
    } else {
        fill(0, 255, 0); // Green
    }

    // Draw circles
    ellipse(xPos1, yPos1, 100, 100);
    ellipse(xPos2, yPos2, 100, 100);
}

function mouseClicked() {
    // Update circles' positions to random points
    xPos1 = random(50, 350);
    yPos1 = random(50, 350);
    xPos2 = random(50, 350);
    yPos2 = random(50, 350);
}
