import { openModal } from "./modal.js";

const container = document.querySelector("#tips-container");

async function loadTips() {
  try {
    const response = await fetch("data/tips.json");
    if (!response.ok) throw new Error("Fetch failed");

    const tips = await response.json();

    container.innerHTML = tips.map(tip => `
      <article class="card">
        <h3>${tip.title}</h3>
        <p><strong>Category:</strong> ${tip.category}</p>
        <p><strong>Duration:</strong> ${tip.duration}</p>
        <button class="details" data-desc="${tip.description}">
          View Details
        </button>
      </article>
    `).join("");

    document.querySelectorAll(".details").forEach(btn => {
      btn.addEventListener("click", () => openModal(btn.dataset.desc));
    });

  } catch (error) {
    container.innerHTML = "<p>Error loading tips.</p>";
    console.error(error);
  }
}

loadTips();
