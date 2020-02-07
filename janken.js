let fingerNum = 0;
let controllerOptions = {};

Leap.loop(controllerOptions, function(frame) {
    // Display Pointable (finger and tool) object data
    let changeImg = document.getElementById("hand");
    if (frame.pointables.length > 0) {
        fingerNum = 0;
        for (let i = 0; i < frame.pointables.length; i++) {
            let pointable = frame.pointables[i];
            if (pointable.extended) {
                fingerNum += 1;
            }
        }
    }
    else {
        fingerNum = -1
    }
    console.log(fingerNum);
    if (fingerNum === 5){
        changeImg.src = "./img/c.png";
        document.getElementById('syohai').textContent = 'あなたの負け'
    } else if (fingerNum === 2){
        changeImg.src = "./img/g.png";
        document.getElementById('syohai').textContent = 'あなたの負け'
    } else if (fingerNum === 0){
        changeImg.src = "./img/p.png";
        document.getElementById('syohai').textContent = 'あなたの負け'
    }
    else {
        changeImg.src = "img/thinking_face.jpg";
        document.getElementById('syohai').textContent = 'うまく読み取れません'
    }
});



