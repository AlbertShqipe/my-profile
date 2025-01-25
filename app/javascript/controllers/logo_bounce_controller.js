import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="logo-bounce"
export default class extends Controller {
  connect() {
    const applyBounceEffect = (element) => {
      if (!element) return;

      element.classList.add("bounce");

      element.addEventListener("mouseover", () => {
        element.classList.remove("bounce");
      });

      element.addEventListener("mouseout", () => {
        element.classList.add("bounce");
      });
    };

    const setupNavigation = (element, targetURL) => {
      if (!element) return;

      element.addEventListener("click", () => {
        window.location.href = targetURL;
      });
    };

    const logo = document.getElementById("logoBox");
    const logoArtistic = document.getElementById("logoBoxArtistic");

    applyBounceEffect(logo);
    applyBounceEffect(logoArtistic);

    setupNavigation(logo, "/media");
    setupNavigation(logoArtistic, "/");
  }
}
