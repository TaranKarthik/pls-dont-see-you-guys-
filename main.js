
function preload(){
    
}

function setup(){
    ctx = createCanvas(300,300);
    
    ctx.center();
    webcamm = createCapture(VIDEO);
    
    webcamm.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/QZSczKBRN/model.json',modelLoaded);

}

function modelLoaded(){
    console.log("model loaded");
}



function draw(){
    image(webcamm,0,0,300,300);
    classifier.classify(webcamm,resultsobtained);
}

function resultsobtained(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("obj_name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
        

    }
}