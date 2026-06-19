AOS.init();

const navbar = document.getElementById("navbar");
const home = document.getElementById("home");

window.addEventListener("scroll", () => {
    if (window.scrollY >= home.offsetHeight) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
});