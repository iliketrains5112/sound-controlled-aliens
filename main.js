// https://teachablemachine.withgoogle.com/models/V6p8xLyvE/

function startClassification(){
navigator.mediaDevices.getUserMedia({audio: true}),
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/V6p8xLyvE/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_label").innerHTML= 'I can hear '+results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy '+(results[0].confidence*100).toFixed(2)+"%";
    rgb_red=Math.floor(Math.random()*256);
    rgb_green=Math.floor(Math.random()*256);
    rgb_blue=Math.floor(Math.random()*256);

    document.getElementById("result_label").style.color="rgb("+rgb_red+","+rgb_green+","+rgb_blue+")";
    document.getElementById("result_confidence").style.color="rgb("+rgb_red+","+rgb_green+","+rgb_blue+")";

    image1=document.getElementById("alien1");
    image2=document.getElementById("alien2");
    image3=document.getElementById("alien3");
    image4=document.getElementById("alien4");

    if (results[0].label=="Clap"){
        image1.src="aliens-01.gif";
        image2.src="aliens-02.png";
        image3.src="aliens-03.png";
        image4.src="aliens-04.png";
    }

    else if (results[0].label=="Snap"){
        image1.src="aliens-01.png";
        image2.src="aliens-02.gif";
        image3.src="aliens-03.png";
        image4.src="aliens-04.png";
    }

    else if (results[0].label=="Bell"){
        image1.src="aliens-01.png";
        image2.src="aliens-02.png";
        image3.src="aliens-03.gif";
        image4.src="aliens-04.png";
    }

    else{
        image1.src="aliens-01.png";
        image2.src="aliens-02.png";
        image3.src="aliens-03.png";
        image4.src="aliens-04.gif";
    }
}
}

