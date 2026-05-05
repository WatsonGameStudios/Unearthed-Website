const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector("nav ul");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.classList.toggle("active");
  });
}

const navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    toggle.classList.remove("active");
  });
});