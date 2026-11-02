import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="video" (on a <video> element)
// Plays the logo intro once per visit, then holds on the stopAt frame for good.
// The poster is that same frame, so the final view is what shows whenever the
// clip doesn't play: autoplay blocked, reduced motion, or a return visit.
// Only starts when the media query matches, so other layouts never download it.
const PLAYED_KEY = "intro-played"

export default class extends Controller {
  static values = { stopAt: Number, media: String }

  connect() {
    if (this.mediaValue && !window.matchMedia(this.mediaValue).matches) return
    if (this.alreadyPlayed() || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    this.hold = () => {
      if (this.element.currentTime < this.stopAtValue) return
      this.stop()
    }
    // If a slow device runs to the end, reloading brings the poster (the same view) back
    this.ended = () => {
      this.stop()
      this.element.load()
    }

    this.element.addEventListener("timeupdate", this.hold)
    this.element.addEventListener("ended", this.ended)
    this.element.play().catch(() => {})
  }

  disconnect() {
    this.element.removeEventListener("timeupdate", this.hold)
    this.element.removeEventListener("ended", this.ended)
  }

  // Pausing in place is enough: every frame from ~1s to the end is the full view.
  // (Seeking back to stopAt is unreliable when the server doesn't support range requests.)
  stop() {
    this.element.pause()
    this.element.removeEventListener("timeupdate", this.hold)
    this.element.removeEventListener("ended", this.ended)
    try { sessionStorage.setItem(PLAYED_KEY, "1") } catch {}
  }

  alreadyPlayed() {
    try { return sessionStorage.getItem(PLAYED_KEY) === "1" } catch { return false }
  }
}
