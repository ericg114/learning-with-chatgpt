// Position of the bouncing circle
let xCircle = 100;
let yCircle = 200;
let xSpeed = 2;
let ySpeed = 2;

// Trail array to store past positions
let trail = [];

function setup() {
    createCanvas(400, 400);
    noStroke();
}

function draw() {
    background(0, 10); // Add a slight alpha value to create a fading trail
    
    // Update circle's position
    xCircle += xSpeed;
    yCircle += ySpeed;
    
    // Bounce the circle off the canvas edges
    if (xCircle < 0 || xCircle > width) {
        xSpeed *= -1;
    }
    if (yCircle < 0 || yCircle > height) {
        ySpeed *= -1;
    }
    
    // Store current position in the trail
    trail.push(createVector(xCircle, yCircle));
    
    // Limit the trail length
    if (trail.length > 50) {
        trail.splice(0, 1);
    }
    
    // Draw the trail
    for (let i = 0; i < trail.length; i++) {
        fill(255, 0, 255, 100); // Magenta with alpha
        ellipse(trail[i].x, trail[i].y, 20, 20); // Smaller circle for the trail
    }
    
    // Draw the bouncing magenta circle
    fill(255, 0, 255); // Magenta
    ellipse(xCircle, yCircle, 30, 30); // Smaller circle
}
