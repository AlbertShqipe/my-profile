import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="burger-menu"
export default class extends Controller {
  connect() {
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.getElementById('menu-container');
    const logo = document.getElementById('logoBoxArtistic');
    const albert = document.getElementById('albert');
    const logoContent = document.getElementById('navbarContent');
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      if (burgerMenu.classList.contains('active')) {
        menu.style = 'opacity: 1; z-index:1000';
        logo.style = 'display: none';
        albert.style = 'display: none';
        logoContent.style = 'display: none';
      } else {
        menu.style = 'display: none';
        albert.style = 'display: block';
        logo.style = 'display: block;';
        // logoContent.style = 'display: block;';
      }
    });
  }
}
