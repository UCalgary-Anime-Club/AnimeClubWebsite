const body = document.body;
const menuIcon = document.getElementById("menuIcon");
const sildeinMenu = document.getElementById("slideinnMenu");

menuIcon.addEventListener("click", function(event) {
  event.stopPropagation();
  slideinMenu.classList.toggle("open");
})

slideinMenu.addEventListener("click", function(event) {
  event.stopPropagation();
})

body.addEventListener("click", function() {
  slideinMenu.classList.remove("open");
})

