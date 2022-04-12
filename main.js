 var noseX=0;
var noseY=0;
 var filter = "";




function preload() {
    clown_nose = loadImage('https://i.postimg.cc/15D37XtW/Clown-nose-large.webp');
 m = loadImage("https://i.postimg.cc/Hs3QnTDk/moustache-PNG18.png");
  
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(filter, noseX-33, noseY-30, 70, 70);
}

function take_snapshot(){
    save('myFilterImage.png');
}
function modelLoaded() {
    console.log('poseNet is loaded');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
}}

function nose(){
   fliter = clown_nose; 
}
function moustace(){
filter = m;
}