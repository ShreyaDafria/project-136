status = "";
function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380 , 380);
    video.hide();
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("pause").innerHTML="Status : Detecting Objects";
    object = document.getElementById("inputt").value;
    console.log("input text = "+ object);
}
function modelLoaded(){
    console.log("Model Loaded !!");
    status = true;
}
function draw()
{
    image(video,0 ,0 , 480, 380);
}
