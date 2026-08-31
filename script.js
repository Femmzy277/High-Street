const menuIcon = document.getElementById("menuIcon");
const navMenu = document.querySelector(".Navemenu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});