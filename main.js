mustacheX = 0;
mustacheY = 0;

function preload() {
    mustache = loadImage("https://i.postimg.cc/SQ8DhjtZ/mustache.png");
}
 
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, mustacheX, mustacheY, 70, 70);
}