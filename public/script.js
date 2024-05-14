AOS.init();

let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("font-bold");
        links.classList.add("font-[400]");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("font-bold");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.remove("font-[400]");
      });
    }
  });
};

const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name = e.name === "menu-outline" ? "close-outline" : "menu-outline";
  navLinks.classList.toggle("translate-y-[0]");
}

let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnail = document.querySelectorAll(".tumbnail .item");

let countItem = items.length;
let itemActive = 0;

// next item
next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};

// prev item
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};

function showSlider() {
  // remove 'active'
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbnailActiveOld = document.querySelector(".tumbnail .item.active");
  itemActiveOld.classList.remove("active");
  thumbnailActiveOld.classList.remove("active");

  // add active
  items[itemActive].classList.add("active");
  thumbnail[itemActive].classList.add("active");
}

thumbnail.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});

const images = ["assets/images/hi3rd.png", "assets/images/osu.jpeg"];
const images2 = [
  "assets/images/Mission_Yozakura_Family.jpeg",
  "assets/images/revival_hunter.jpeg",
  "assets/images/fragrance.jpeg",
];
const images3 = [
  "assets/images/horimiya.jpeg",
  "assets/images/magus_bride.jpeg",
  "assets/images/slime.jpeg",
];
let currentIndex = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  currentIndex2 = (currentIndex2 + 1) % images2.length;
  currentIndex3 = (currentIndex3 + 1) % images3.length;

  const imageUrl = images[currentIndex];
  document.getElementById("gamelist").src = imageUrl;

  const imageUrl2 = images2[currentIndex2];
  document.getElementById("readlist").src = imageUrl2;

  const imageUrl3 = images3[currentIndex3];
  document.getElementById("animelist").src = imageUrl3;
}

setInterval(changeImage, 6000);
