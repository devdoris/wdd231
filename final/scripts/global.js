document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("#year");
  const lastModifiedSpan = document.querySelector("#lastModified");
  const menuButton = document.querySelector("#menu");
  const nav = document.querySelector("nav");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.textContent =
    nav.classList.contains("open") ? "✖" : "☰";
    });
  }
});

