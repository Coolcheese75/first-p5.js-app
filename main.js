function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 420, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(570, 420, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    rect(75, 400, 460, 20);


    rect(570, 50, 20, 335);

    rect(50, 85, 20, 300);


    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(570, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    //rect(90, 40, 460, 20);

    //rect(1, 40, 460, 180);
}

function take_snapshot() {
    save('Neel.png');
}