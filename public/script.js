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


const texts = document.getElementsByClassName("hi");

function fitHeight() {
  Array.from(texts).forEach((text) => {
    const parent = text.parentElement;
    if (!parent) return;

    text.style.fontSize = `${parent.clientHeight}px`;
  });
}

fitHeight();
window.addEventListener("resize", fitHeight);