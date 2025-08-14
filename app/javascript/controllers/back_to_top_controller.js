import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="back-to-top"
export default class extends Controller {
  connect() {
    const icon = document.getElementById('backToTop');

    if (!icon) {
        // console.warn("Element #backToTop not found");
        return;
    }

    // console.log(icon);

    // Get all sections in the main container
    const sections = document.querySelectorAll('.main-container > div');

    // Function to get the background color of the section the icon is over
    function getSectionBackgroundColor() {
        const rect = icon.getBoundingClientRect(); // Get the position of the icon in the viewport
        const iconBottom = rect.bottom; // Get the bottom position of the icon

        // Loop through each section to find the one the icon is over
        for (let section of sections) {
            const sectionRect = section.getBoundingClientRect();
            // Check if the bottom of the icon is within this section's top and bottom bounds
            if (iconBottom >= sectionRect.top && iconBottom <= sectionRect.bottom) {
                const bgColor = window.getComputedStyle(section).backgroundColor;
                // console.log(`Found background color for section: ${bgColor}`);
                return bgColor;
            }
        }

        // If the icon is not over any section, return default background (e.g., body background)
        return window.getComputedStyle(document.body).backgroundColor;
    }

    function updateIconVisibility() {
        const pageH = document.documentElement.scrollTop;
        const minScroll = 250; // Start opacity transition
        const maxScroll = 2025; // End opacity transition

        if (pageH <= minScroll) {
            icon.style.opacity = 0; // Fully hidden before minScroll
        } else if (pageH >= maxScroll) {
            icon.style.opacity = 1; // Fully visible after maxScroll
        } else {
            let opacity = (pageH - minScroll) / (maxScroll - minScroll);
            icon.style.opacity = opacity.toFixed(2); // Smooth gradual transition
        }
    }

    function updateIconColor() {
        const bgColor = getSectionBackgroundColor(); // Get the background color of the section
        // console.log("Background color at position:", bgColor);

        // Extract RGB values from the background color
        // const rgbMatch = bgColor.match(/\d+/g);
        // if (rgbMatch && rgbMatch.length >= 3) {
        //     const [r, g, b] = rgbMatch.map(Number);

        //     // Calculate luminance (relative brightness)
        //     const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        //     // Set the icon color based on luminance
        //     icon.style.color = luminance > 0.5 ? "#000" : "#fff"; // Black text for light backgrounds, white text for dark
        // }
        const rgbMatch = bgColor.match(/\d+/g);
        if (rgbMatch && rgbMatch.length >= 3) {
            const [r, g, b] = rgbMatch.map(Number);

            // Calculate luminance (relative brightness)
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

            // If background is exactly light gray, force black icon color
            if (bgColor === 'rgb(229, 229, 229)') {
                icon.querySelector('span').style = 'color: rgb(0, 0, 0); border-bottom:2px solid rgb(0, 0, 0)'; // Black color for light gray background
            }else if (bgColor === 'rgb(0, 0, 0)') {
              icon.querySelector('span').style = 'color: rgb(229, 229, 229); border-bottom:2px solid rgb(229, 229, 229)';
            } else {
                // Otherwise, determine the color dynamically based on luminance
                icon.querySelector('span').style.color = luminance > 0.5 ? "#000" : "#fff"; // Black for bright backgrounds, white for dark
            }
        }
    }


    function handleScroll() {
        updateIconVisibility();
        updateIconColor();
    }

    document.addEventListener('scroll', handleScroll);

    // Add click event only once
    icon.addEventListener('click', () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    });

    // Run on page load in case the user starts from a scrolled position
    handleScroll();
  }
}
