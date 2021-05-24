const menuButton = document.querySelector(".hamburger-button");
const menuOptions = document.querySelectorAll(".menu-item");
const iconMenu = document.querySelector(".fas.fa-bars");
const logo = document.querySelector(".logo");
const mql =  window.matchMedia("(min-width:1025px)");

menuButton.addEventListener("click", function (event) {
  logo.classList.toggle("hidden");
  iconMenu.classList.toggle("fa-bars");
  iconMenu.classList.toggle("fa-times");
  menuOptions.forEach((option) => {
    option.classList.toggle("hidden");
  });
});


function displayNavMenuOptions(e) {
  if (e.matches) {
    menuOptions.forEach( option => {
      option.classList.remove("hidden");
    });
    menuButton.classList.add("hidden");
  } else {
    menuOptions.forEach( option => {
      option.classList.add("hidden");
    });
    menuButton.classList.remove("hidden");
  }
}

mql.addEventListener('change', displayNavMenuOptions);