const menuIcon = document.getElementById("menuIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

menuIcon.addEventListener("click", function() {
  dropdownMenu.classList.toggle("open");
})