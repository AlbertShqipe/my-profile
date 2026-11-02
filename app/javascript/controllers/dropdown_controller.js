import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown" (on a <details> element)
export default class extends Controller {
  closeOutside(event) {
    if (!this.element.contains(event.target)) this.close()
  }

  close() {
    this.element.open = false
  }
}
