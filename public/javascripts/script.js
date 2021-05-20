const menuButton =  document.querySelector(".hamburger-button");
const menuOptions = document.querySelectorAll(".menu-item");
const iconMenu = document.querySelector(".fas.fa-bars");
const logo = document.querySelector('.logo');
menuButton.addEventListener('click', function(event) {
    logo.classList.toggle("hidden");
    iconMenu.classList.toggle("fa-bars");
    iconMenu.classList.toggle("fa-times");
    menuOptions.forEach((option) => {
        option.classList.toggle('hidden');
    })
});