function preload(){

}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet('on', gotpose)
}
function draw() {
    image(video,0,0,300,300)
}
function save(){
    save('hi:)')
}
function modelLoaded(){
    console.log("Started")
}
function gotpose(results){
    if(results.length > 0){
        console.log(results);
        console.log("mouth x =" + results[0].pose.nose.x);
        console.log("mouth x =" + results[0].pose.nose.y);
    }
}