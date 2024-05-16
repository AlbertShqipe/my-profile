// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"

document.addEventListener("DOMContentLoaded", function() {
  var hiddenAudio = document.getElementById("hidden-audio");
  var playSoundLink = document.getElementById("play-sound-link");
  var stopSoundLink = document.getElementById("stop-sound-link");

  playSoundLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    hiddenAudio.play(); // Play the hidden audio
    stopSoundLink.style.display = "inline"; // Show the stop sound link
    playSoundLink.style.display = "none"; // Hide the play sound link
  });

  stopSoundLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    hiddenAudio.pause(); // Pause the hidden audio
    hiddenAudio.currentTime = 0; // Rewind the audio to the beginning
    stopSoundLink.style.display = "none"; // Hide the stop sound link
    playSoundLink.style.display = "inline"; // Show the play sound link
  });
});

document.addEventListener("DOMContentLoaded", function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
});
