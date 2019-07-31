const searchInpu = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-icon");

const panel = document.querySelector(".panel");
const menuBtn = document.querySelector(".menu-icon");

// Events
searchBtn.addEventListener("click", function() {
  searchInpu.classList.toggle("active");
});

menuBtn.addEventListener("click", function() {
  panel.classList.toggle("show-menu");
  panel.classList.toggle("active");
});
