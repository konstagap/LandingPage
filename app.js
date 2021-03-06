const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const sideMenu = document.getElementById("side-menu");
const closeModal = document.getElementById("closeModal");
const openModal = document.getElementById("openModal");
const modal = document.getElementById("modal");

// toggle navigation
window.addEventListener("click", e => {
  e.target === openNav
    ? (sideMenu.style.width = "200px")
    : (sideMenu.style.width = "0px");
});

//Hide navigation
closeNav.addEventListener("click", () => {
  sideMenu.style.width = "0";
});

//Show modal
openModal.addEventListener("click", () => {
  modal.classList.add("show-modal");
});
//Hide Modal
closeModal.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});
window.addEventListener("click", e => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});
