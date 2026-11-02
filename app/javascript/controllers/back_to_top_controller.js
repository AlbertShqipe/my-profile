import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="back-to-top"
export default class extends Controller {
  connect() {
    this.onScroll = () => this.element.classList.toggle("is-visible", window.scrollY > 600)
    window.addEventListener("scroll", this.onScroll, { passive: true })
    this.onScroll()
  }

  disconnect() {
    window.removeEventListener("scroll", this.onScroll)
  }

  scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}
