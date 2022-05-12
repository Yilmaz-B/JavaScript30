window.addEventListener("keydown", playAudio);

function playAudio(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) {
        return;
    }
    key.classList.add('playing');
    audio.play();
    audio.currentTime = 0;
}

const keys = document.querySelectorAll(".keys");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
    if(e.propertyName !== "transform") {
        return;
    } else {
        e.target.classList.remove("playing");
    }
}