const params = new URLSearchParams(window.location.search);

document.getElementById("name").textContent =
  `${params.get("fname")} ${params.get("lname")}`;

document.getElementById("email").textContent = params.get("email");
document.getElementById("phone").textContent = params.get("phone");
document.getElementById("business").textContent = params.get("business");

const membershipMap = {
  "1": "NP Membership",
  "2": "Bronze Membership",
  "3": "Silver Membership",
  "4": "Gold Membership"
};

document.getElementById("membership").textContent =
  membershipMap[params.get("membership")] || "Unknown";

const iso = params.get("timestamp");
if (iso) {
  const date = new Date(iso);
  document.getElementById("timestamp").textContent = date.toLocaleString();
} else {
  document.getElementById("timestamp").textContent = "Unknown";
}

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    menuButton.textContent =
    navigation.classList.contains("show") ? "✖" : "☰";
});

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");