import { Controller } from "@hotwired/stimulus"
import Player from "@vimeo/player";

// Connects to data-controller="video"
export default class extends Controller {
  connect() {
    const video = document.getElementById('video');
    console.log(video);
    const player = new Player(video);

    player.on("play", () => {
      // player.style.opacity = "1"; //you can use the given code to see when the video started playing
      console.log("The video has started playing!");
    });
    player.on("timeupdate", function(data) {
      if (data.seconds >= 3) {
        player.pause(); // Stops the video at 4 seconds
      }
    });

  }
}
