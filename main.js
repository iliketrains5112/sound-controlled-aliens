// https://teachablemachine.withgoogle.com/models/V6p8xLyvE/

function startClassification(){
navigator.mediaDevices.getUserMedia({audio: true}),
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/V6p8xLyvE/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
