const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  menuButton.textContent =
  navigation.classList.contains("show") ? "✖" : "☰";
});

async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data.companies);
}

function displayMembers(companies) {
  membersContainer.innerHTML = "";

  companies.forEach(company => {
    const card = document.createElement("section");
    card.innerHTML = `
      <img src="images/${company.image}" alt="${company.name} logo" loading="lazy">
      <h3>${company.name}</h3>
      <p>${company.address}</p>
      <p>${company.phone}</p>
      <a href="${company.website}" target="_blank" class="visit-btn">Visit Website</a>
      <p>Membership Level: ${company.membership}</p>
    `;
    membersContainer.appendChild(card);
  });
}

gridBtn.addEventListener("click", () => {
  membersContainer.className = "grid";
  gridBtn.classList.add("active");
  listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
  membersContainer.className = "list";
  listBtn.classList.add("active");
  gridBtn.classList.remove("active");
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

getMembers();
