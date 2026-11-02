import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="counter"
// Counts each number up from 0 the first time the block scrolls into view.
// The final values are already in the HTML, so nothing is lost without JS.
export default class extends Controller {
  static targets = ["number"]

  connect() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      this.observer.disconnect()
      this.numberTargets.forEach((el) => this.animate(el))
    }, { threshold: 0.4 })

    this.observer.observe(this.element)
  }

  disconnect() {
    this.observer?.disconnect()
  }

  animate(el) {
    const target = Number(el.dataset.value)
    const duration = 1400
    const start = performance.now()

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      el.textContent = Math.round(target * eased)
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }
}
