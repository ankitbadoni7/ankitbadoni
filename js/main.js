import "./modules/drag.js";
import "./modules/typing.js";
import "./modules/bubbles.js";
import "./modules/navbar.js";
import "./modules/download.js";
import "./modules/about.js";

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".capsule_item");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });


    navItems.forEach((item) => {

        item.classList.remove("active");

        const href = item.getAttribute("href");

        if (href === `#${currentSection}`) {

            item.classList.add("active");
        }
    });

});