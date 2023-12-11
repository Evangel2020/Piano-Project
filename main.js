const pianoKeys = document.querySelectorAll(".piano-keys .key");
const slider = document.querySelector(".piano-slider input");
const check = document.querySelector(".keys-checkbox input");




let tunes = new Audio("music/a.wav");

const playTune = (key) => {
    tunes.src = `music/${key}.wav` // passing audio src based on key pressed
    tunes.play(); //playing tunes
}

pianoKeys.forEach(key => {
    // calling playTune function with passing data-key value as an argument
    key.addEventListener('click', () => playTune(key.dataset.key));
});

const moverSlider = (e) => {
    tunes.volume = e.target.value; // passing the range slider value as an audio volume
}

const checkSlider = (e) => {
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}


slider.addEventListener("input", moverSlider)
check.addEventListener("input", checkSlider)


