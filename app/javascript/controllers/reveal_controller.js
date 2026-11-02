import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="reveal"
// Fades items in as they enter the viewport. Content stays visible without JS
// because the hidden state only applies under .reveal-ready.
export default class extends Controller {
  static targets = ["item"]

  connect() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add("is-visible")
        this.observer.unobserve(entry.target)
      })
    }, { rootMargin: "0px 0px -10% 0px" })

    this.element.classList.add("reveal-ready")
    this.itemTargets.forEach((item) => this.observer.observe(item))
  }

  disconnect() {
    this.observer?.disconnect()
  }
}
