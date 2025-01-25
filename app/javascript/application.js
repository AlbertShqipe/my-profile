// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"

document.addEventListener("DOMContentLoaded", function() {
  // The code below is used to play the sound in the background
  // var hiddenAudio = document.getElementById("hidden-audio");
  // var playSoundLink = document.getElementById("play-sound-link");
  // var stopSoundLink = document.getElementById("stop-sound-link");

  // playSoundLink.addEventListener("click", function(event) {
  //   event.preventDefault(); // Prevent the default link behavior
  //   hiddenAudio.play(); // Play the hidden audio
  //   stopSoundLink.style.display = "inline"; // Show the stop sound link
  //   playSoundLink.style.display = "none"; // Hide the play sound link
  // });

  // stopSoundLink.addEventListener("click", function(event) {
  //   event.preventDefault(); // Prevent the default link behavior
  //   hiddenAudio.pause(); // Pause the hidden audio
  //   hiddenAudio.currentTime = 0; // Rewind the audio to the beginning
  //   stopSoundLink.style.display = "none"; // Hide the stop sound link
  //   playSoundLink.style.display = "inline"; // Show the play sound link
  // });

  // The code below is used to turn the logo 180 deg in the y axes
  // var logoBox = document.getElementById("logoBox");

  // logoBox.addEventListener("click", function turnLogo(params) {
  //   if (logoBox.classList == "logo-box") {
  //     // you should set the necessary code to reset the page here
  //     turnLogoBack();
  //     // console.log("The logo is front")
  //   } else {
  //     // you should set the necessary code to reset the page here
  //     turnLogoFront();
  //     // console.log("The logo is backwards")
  //   };
  // });


  // const turnLogoBack = () => {
  //   const logoContentArtistic = document.querySelector('.logo-content-artistic');
  //   const logoA = document.querySelector('.logo-a');
  //   const logoDarkSpot = document.querySelector('.logo-dark-spot');
  //   const logoSlash = document.querySelector('.logo-slash');
  //   const logoN = document.querySelector('.logo-n');
  //   logoBox.classList = "logo-box-back";
  //   logoContentArtistic.classList = "logo-content-artistic-back";
  //   logoA.classList = "logo-a-back";
  //   logoDarkSpot.classList = "logo-dark-spot-back";
  //   logoSlash.classList = "logo-slash-back";
  //   logoN.classList = "logo-n-back";
  // }

  // const turnLogoFront = () => {
  //   const logoContentArtisticBack = document.querySelector('.logo-content-artistic-back');
  //   const logoABack = document.querySelector('.logo-a-back');
  //   const logoDarkSpotBack = document.querySelector('.logo-dark-spot-back');
  //   const logoSlashBack = document.querySelector('.logo-slash-back');
  //   const logoNBack = document.querySelector('.logo-n-back');
  //   logoBox.classList = "logo-box";
  //   logoContentArtisticBack.classList = "logo-content-artistic";
  //   logoABack.classList = "logo-a";
  //   logoDarkSpotBack.classList = "logo-dark-spot";
  //   logoSlashBack.classList = "logo-slash";
  //   logoNBack.classList = "logo-n";
  // }
});

document.addEventListener("DOMContentLoaded", function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
});
