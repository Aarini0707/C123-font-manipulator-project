nosex=0;
nosey=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    canvas= createCanvas(550,500);
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function draw(){
    background('#ed7777');
    document.getElementById("size").innerHTML="Width & Height of the text= "+difference+"px";
    fill('#ed1a1a');
    stroke('#801313');
    text("Aarini",nosex,nosey);
    textSize(difference);
}

function modelLoaded(){
    console.log("Model is Loaded");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("Nose X= "+nosex+" Nose Y= "+nosey);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("Left Wrist X= "+leftWristX+" Right Wrist X= "+rightWristX+" Difference= "+difference);
    }
}