import { places } from "../data/discover.mjs";

const container = document.querySelector(".cards");

places.forEach((place, index) => {
  const card = document.createElement("article");
  card.classList.add("card", `card${index + 1}`);

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy" height="100%">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button onclick="window.open('${place.link}', '_blank')">Learn More</button>
  `;

  container.appendChild(card);
});

const message = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (days < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else {
    message.textContent = `You last visited ${days} day${days === 1 ? "" : "s"} ago.`;
  }
}

localStorage.setItem("lastVisit", now);


const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  menuButton.textContent =
    navigation.classList.contains("show") ? "✖" : "☰";
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;