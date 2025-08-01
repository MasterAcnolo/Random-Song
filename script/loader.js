const loader = document.getElementById("loader");
const page = document.getElementById("page");

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded");

  // Fade out loader
  loader.classList.add("fade-out");

  // Fade in page
  page.classList.add("fade-in");

  // Cache le loader après animation
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000); // même durée que l'animation CSS
});
