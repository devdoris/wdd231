document.getElementById("timestamp").value = new Date().toISOString();

function setupModalButtons() {
  document.querySelectorAll("[data-modal]").forEach(button => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.modal);
      modal.showModal();
    });
  });
}

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  menuButton.textContent =
    navigation.classList.contains("show") ? "✖" : "☰";
});

fetch("data/members.json")
  .then(response => response.json())
  .then(data => {
    const cardsContainer = document.getElementById("membershipCards");

    const membershipNames = {
      1: "NP Membership",
      2: "Bronze Membership",
      3: "Silver Membership",
      4: "Gold Membership"
    };

    for (let level = 1; level <= 4; level++) {
      const companies = data.companies.filter(c => c.membership === level);

      const card = document.createElement("div");
      card.className = "card fade-in";

      const h2 = document.createElement("h2");
      h2.textContent = membershipNames[level];
      card.appendChild(h2);

      if (companies.length > 0) {
        const ul = document.createElement("ul");
        companies.forEach(c => {
          const li = document.createElement("li");
          li.innerHTML = `<img src="images/${c.image.split('/').pop()}" alt="${c.name}" width="30" style="vertical-align:middle;margin-right:5px;"> ${c.name}`;
          ul.appendChild(li);
        });
        card.appendChild(ul);
      } else {
        const p = document.createElement("p");
        p.textContent = "No companies yet";
        card.appendChild(p);
      }

      const btn = document.createElement("button");
      btn.textContent = "View Benefits";
      btn.dataset.modal = `modal${level}`;
      card.appendChild(btn);

      cardsContainer.appendChild(card);
    }

    const main = document.querySelector("main");
    for (let level = 1; level <= 4; level++) {
      const modal = document.createElement("dialog");
      modal.id = `modal${level}`;
      modal.innerHTML = `
        <h3>${membershipNames[level]} Benefits</h3>
        <p>${level === 1 ? "Free listing, nonprofit spotlight, community events." :
          level === 2 ? "Basic ads, event participation, business listing on directory." :
          level === 3 ? "Homepage spotlight, training access, event discounts." :
          "Premium ads, featured events, maximum exposure."}</p>
        <button onclick="this.closest('dialog').close()">Close</button>
      `;
      main.appendChild(modal);
    }

    setupModalButtons();
  })
  .catch(err => console.error("Error loading JSON:", err));

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;