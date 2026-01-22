document.addEventListener("DOMContentLoaded", async () => {
  const spotlightContainer = document.querySelector("#spotlight-cards");

  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    // FIX #1: use companies
    const qualified = data.companies.filter(
      company => company.membership === 3 || company.membership === 2
    );

    // Shuffle and select 3
    qualified
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .forEach(company => {
        const card = document.createElement("section");
        card.className = "spotlight-card";

        card.innerHTML = `
          <h3>${company.name}</h3>
          <img src="${company.image}" alt="${company.name} logo" width="200" height="100" loading="lazy" class="newimage">
          <p>${company.address}</p>
          <p>${company.phone}</p>
          <p>
            <a href="${company.website}" target="_blank" rel="noopener">
              Visit Website
            </a>
          </p>
          <p class="level">
            ${company.membership === 3 ? "Gold" : "Silver"} Member
          </p>
        `;

        spotlightContainer.appendChild(card);
      });

  } catch (error) {
    console.error("Spotlight error:", error);
  }
});
