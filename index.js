function play_tone(key) {

  switch (key) {
    case "m":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();

    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case "h":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case "e":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "h":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    default:
      alert("button pe click krle");

  }
}


function btnAnimation(keyPressed){
  document.querySelector("."+keyPressed).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+keyPressed).classList.remove("pressed")
  }, 100);
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var key = this.innerHTML;
    play_tone(key);
    btnAnimation(key);
  });

}
document.addEventListener("keydown", function(event){
  play_tone(event.key);
  btnAnimation(event.key);
});
