document.addEventListener("DOMContentLoaded", function() {

  fetch("header.html")
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {

      document.getElementById("header-container").innerHTML = data;

        // Get the hamburger menu after the header has been added
        const body = document.body;
        const menuIcon = document.getElementById("menuIcon");
        const slideinMenu = document.getElementById("slideinMenu");

        menuIcon.addEventListener("click", function() {
            event.stopPropagation();
            slideinMenu.classList.toggle("open");
        });

        slideinMenu.addEventListener("click", function(event) {
          event.stopPropagation();
        })
        
        body.addEventListener("click", function() {
          slideinMenu.classList.remove("open");
        })
    });

});

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

