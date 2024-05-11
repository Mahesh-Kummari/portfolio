const menuToggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const menuIcon = document.getElementById("menu-icon");

menuToggleBtn.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
  // <i class="fa-solid fa-xmark"></i>;
});
