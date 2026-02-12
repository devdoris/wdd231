import { saveItem } from "./storage.js";

const form = document.querySelector("#planner-form");

form.addEventListener("submit", () => {
  const goal = form.goal.value;
  const duration = form.duration.value;

  saveItem("studyPlan", { goal, duration });
});
