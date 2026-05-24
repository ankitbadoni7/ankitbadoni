/// DRAG - HERO GLASS
const heroGlass = document.querySelector(".hero_glass");
const heroContent = document.querySelector(".hero_content");

let isDragging = false;

let offsetX = 0;
let offsetY = 0;


heroGlass.addEventListener("mousedown", (e) => {

    e.preventDefault();

    isDragging = true;

    const rect = heroGlass.getBoundingClientRect();
    const parentRect = heroContent.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    heroGlass.style.transform = "none";

    heroGlass.style.left =
        (rect.left - parentRect.left) + "px";

    heroGlass.style.top =
        (rect.top - parentRect.top) + "px";
});


document.addEventListener("mousemove", (e) => {

    if(!isDragging) return;

    const parentRect =
        heroContent.getBoundingClientRect();

    heroGlass.style.left =
        (e.clientX - parentRect.left - offsetX) + "px";

    heroGlass.style.top =
        (e.clientY - parentRect.top - offsetY) + "px";
});


document.addEventListener("mouseup", () => {

    isDragging = false;
});


/* =========================================
   DRAG - FOOTER GLASS
========================================= */

const footerGlass = document.querySelector('.glass_rect');
const thanksSection = document.querySelector('.thanks_section');

let isFooterDragging = false;

let footerShiftX = 0;
let footerShiftY = 0;


footerGlass.addEventListener('mousedown', (e) => {

    e.preventDefault();

    isFooterDragging = true;

    const rect = footerGlass.getBoundingClientRect();

    footerShiftX = e.clientX - rect.left;
    footerShiftY = e.clientY - rect.top;

    document.body.style.cursor = 'grabbing';
});


document.addEventListener('mousemove', (e) => {

    if(!isFooterDragging) return;

    const sectionRect =
    thanksSection.getBoundingClientRect();

    footerGlass.style.left =
    (e.clientX - sectionRect.left - footerShiftX) + 'px';

    footerGlass.style.top =
    (e.clientY - sectionRect.top - footerShiftY) + 'px';
});


document.addEventListener('mouseup', () => {

    isFooterDragging = false;

    document.body.style.cursor = 'default';
});