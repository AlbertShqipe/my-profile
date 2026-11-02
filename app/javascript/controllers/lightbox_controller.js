import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="lightbox"
// Opens gallery images full screen in a native <dialog>; arrows and Escape work too.
export default class extends Controller {
  static targets = ["image", "dialog", "view"]

  open({ params: { index } }) {
    this.show(index)
    this.dialogTarget.showModal()
  }

  close() {
    this.dialogTarget.close()
  }

  next() {
    this.show((this.index + 1) % this.imageTargets.length)
  }

  prev() {
    this.show((this.index - 1 + this.imageTargets.length) % this.imageTargets.length)
  }

  // A click on the dark area around the photo closes it
  backdrop(event) {
    if (event.target === this.dialogTarget) this.close()
  }

  key(event) {
    if (event.key === "ArrowRight") this.next()
    if (event.key === "ArrowLeft") this.prev()
  }

  show(index) {
    this.index = index
    const image = this.imageTargets[index]
    this.viewTarget.src = image.currentSrc || image.src
    this.viewTarget.alt = image.alt
  }
}
