import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="intro" (on the SVG logo intro)
// Plays the reveal once per visit, then the logo simply stays. It waits for the
// fonts so the letters don't swap mid-animation; reduced motion, a return
// visit or no JS all show the finished logo straight away.
const PLAYED_KEY = "intro-played"

export default class extends Controller {
  async connect() {
    if (this.alreadyPlayed() || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    this.element.classList.add("is-pending")
    await Promise.race([this.fontsReady(), new Promise((resolve) => setTimeout(resolve, 1500))])
    if (!this.element.isConnected) return

    this.element.classList.replace("is-pending", "is-playing")
    try { sessionStorage.setItem(PLAYED_KEY, "1") } catch {}
  }

  fontsReady() {
    return Promise.all([
      document.fonts.load('500 99px "Cormorant Garamond"'),
      document.fonts.load('italic 400 16px "Cormorant Garamond"'),
      document.fonts.load('500 21px "Montserrat"')
    ]).catch(() => {})
  }

  alreadyPlayed() {
    try { return sessionStorage.getItem(PLAYED_KEY) === "1" } catch { return false }
  }
}
