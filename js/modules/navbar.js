/* --------------NAVBAR-------------- */

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

function hideMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

/* Para mostrar el nav le añado la clase show-menu al nav */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Para ocultar el nav le quito la clase show-menu al nav */
if (navClose) {
  navClose.addEventListener("click", hideMenu);
}

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => link.addEventListener("click", hideMenu));

/* --------------SCROLL SECTIONS-------------- */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  for (let current of sections) {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  }
}

window.addEventListener("scroll", scrollActive);
