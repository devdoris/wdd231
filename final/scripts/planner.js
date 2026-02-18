import { getItem, saveItem } from "./storage.js";

const form = document.querySelector("#planner-form");
const savedPlans = document.querySelector("#saved-plans");

function renderPlans() {
  const plans = getItem("studyPlan") || [];
  savedPlans.innerHTML = plans.map(plan => `
    <div class="card">
      <h3>${plan.goal}</h3>
      <p><strong>Duration:</strong> ${plan.duration}</p>
    </div>
  `).join("");
}

form.addEventListener("submit", () => {
  const goal = form.goal.value.trim();
  const duration = form.duration.value;

  if (!goal) return;

  const plans = getItem("studyPlan") || [];
  plans.push({ goal, duration });
  saveItem("studyPlan", plans);

});

renderPlans();
