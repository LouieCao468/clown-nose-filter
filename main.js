noseX=0;
noseY=0;

function preload() {
nose_image=loadImage('https://i.postimg.cc/hPVKS5N7/istockphoto-851634552-170667a-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded() {
    console.log('PoseNet Is Initioalized')
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x= " + results[0].pose.nose.x);
    console.log("nose y= " + results[0].pose.nose.y);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(nose_image,noseX-20,noseY-20,35,35);
}