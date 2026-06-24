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



// ===============================
// EMAILJS CONTACT FORM SETUP
// ===============================

emailjs.init("j3L9lJOOKUcC-RMTR");

const form = document.querySelector(".contact_form");

const msg = document.createElement("p");
msg.style.marginTop = "10px";
msg.style.fontSize = "14px";
msg.style.color = "#00ffcc";
form.appendChild(msg);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    msg.textContent = "Sending message...";

    emailjs.sendForm(
        "service_8weub3d",
        "template_j1mynth",
        this
    )
   .then(() => {
    msg.textContent = "Message sent successfully ✔";
    msg.style.color = "lightgreen";
    msg.style.marginTop = "20px";
    form.reset();
})
.catch((error) => {
    console.log(error);
    msg.textContent = "Failed to send message ❌";
    msg.style.color = "red";
    msg.style.marginTop = "20px";
});
});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});