import "./modules/drag.js";
import "./modules/typing.js";
import "./modules/bubbles.js";
import "./modules/navbar.js";
import "./modules/download.js";
import "./modules/about.js";
import "./modules/project.js";
import "./modules/contact.js";

// ===== DOWNLOAD CV BUTTON =====
const cvBtn = document.getElementById("cvBtn");

cvBtn.addEventListener("click", () => {
    window.open("doc/ankit_badoni_resume.pdf", "_blank");
});


//capsule active state on scroll
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