const audioContext = new AudioContext();
const $one = document.querySelector("#one");
const $two = document.querySelector("#two");

const audioOne = new Audio();
const audioTwo = new Audio();

$one.addEventListener("click", () => {
  // Play voice
  audioOne.src = "./voice.mp3";
  audioOne.play();

  audioTwo.volume = 0.2;
  audioOne.onended = () => {
    audioTwo.volume = 1;
  };
});

$two.addEventListener("click", () => {
  audioTwo.src = "./music.mp3";
  audioTwo.play();
});
