document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const output = document.querySelector("#output");

  const goal = params.get("goal");
  const duration = params.get("duration");
  const focus = params.get("focus");
  const startDate = params.get("start");

  output.innerHTML = `
    <li><strong>Goal:</strong> ${goal || "Not provided"}</li>
    <li><strong>Duration:</strong> ${duration || "Not provided"}</li>
  `;
});
