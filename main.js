nosex=0;

nosey=0;

difference=0;

rightwristx=0;

leftwristx=0;

randomnumberred=Math.floor(Math.random()*255);

randomnumberblue=Math.floor(Math.random()*255);

randomnumbergreen=Math.floor(Math.random()*255);

randomnumberredsquare=Math.floor(Math.random()*255);

randomnumbergreensquare=Math.floor(Math.random()*255);

randomnumberbluesquare=Math.floor(Math.random()*255);

function updateText()
{

}

function setup()
{
    video=createCapture(VIDEO);
    video.size(600, 500);
    Mycanvas=createCanvas(600, 400);
    Mycanvas.position(650, 100);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', results);
}

function modelLoaded()
{
    console.log("Model has been loaded");
}

function results(res)
{
    if (res.length > 0) {
        console.log(res);
        nosex=res[0].pose.nose.x;
        nosey=res[0].pose.nose.y;
        rightwristx=res[0].pose.rightWrist.x;
        leftwristx=res[0].pose.leftWrist.x;
        difference=leftwristx-rightwristx;
    }

}

function draw()
{
    background(randomnumberred, randomnumbergreen, randomnumberblue);
    fill(randomnumberredsquare, randomnumbergreensquare, randomnumberbluesquare);
}

function preload()
{
 
}