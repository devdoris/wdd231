const dialog = document.querySelector("#modal");
const content = document.querySelector("#modal-content");
const closeBtn = document.querySelector("#modal-close");

export function openModal(text){
  content.textContent = text;
  dialog.showModal();
}

closeBtn.addEventListener("click", () => dialog.close());
dialog.addEventListener("keydown", e => {
  if(e.key==="Escape") dialog.close();
});
