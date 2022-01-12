var video = document.getElementById("MyVideo");
function PlayPause(){
    if (video.paused == true){
        video.play()
        document.getElementById("play").classList.remove("fa-pause");
        document.getElementById("play").classList.add("fa-play");

    }
    else {
        video.pause()
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-pause");
    }
}
function ZoomIn(){
    video.width = 800
    video.height = 600
}
function ZoomOut(){
    video.width = 400
    video.height = 250
}

