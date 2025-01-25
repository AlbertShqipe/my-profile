import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="burger-menu"
export default class extends Controller {
  connect() {
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.getElementById('menu-container');
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      if (burgerMenu.classList.contains('active')) {
        menu.style = 'opacity: 1; z-index:1000';
      } else {
        menu.style = 'display: none';
      }
    });
  }
}
