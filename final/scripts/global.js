document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("#year");
  const lastModifiedSpan = document.querySelector("#lastModified");
  const menuButton = document.querySelector("#menu");
  const nav = document.querySelector("nav");

  if(yearSpan) yearSpan.textContent = new Date().getFullYear();
  if(lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;

  if(menuButton && nav){
    menuButton.setAttribute("aria-expanded","false");
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("open");
      const expanded = nav.classList.contains("open");
      menuButton.setAttribute("aria-expanded", expanded);
      menuButton.textContent = expanded ? "✖" : "☰";
    });
  }

  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if(link.href === window.location.href) link.classList.add("active");
  });
});
