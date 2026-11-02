import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="nav"
// Sticky header: solid background once scrolled, full-screen menu on small screens.
export default class extends Controller {
  static targets = ["menu", "toggle"]

  connect() {
    this.onScroll = () => this.element.classList.toggle("is-scrolled", window.scrollY > 24)
    this.onKey = (event) => { if (event.key === "Escape") this.close() }
    window.addEventListener("scroll", this.onScroll, { passive: true })
    document.addEventListener("keydown", this.onKey)
    this.onScroll()
  }

  disconnect() {
    window.removeEventListener("scroll", this.onScroll)
    document.removeEventListener("keydown", this.onKey)
    document.body.classList.remove("nav-open")
  }

  toggle() {
    this.setOpen(!this.element.classList.contains("is-open"))
  }

  close() {
    this.setOpen(false)
  }

  setOpen(open) {
    this.element.classList.toggle("is-open", open)
    document.body.classList.toggle("nav-open", open)
    this.toggleTarget.setAttribute("aria-expanded", open)
  }
}
