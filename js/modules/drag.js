// =====================
// DRAG - HERO GLASS
// =====================

const heroGlass = document.querySelector('.hero_glass');
const heroSection = document.querySelector('.hero');

let isHeroDragging = false;

let heroShiftX = 0;
let heroShiftY = 0;


heroGlass.addEventListener('mousedown', (e) => {

    e.preventDefault();

    isHeroDragging = true;

    const rect = heroGlass.getBoundingClientRect();

    heroShiftX = e.clientX - rect.left;
    heroShiftY = e.clientY - rect.top;

    document.body.style.cursor = 'grabbing';
});


document.addEventListener('mousemove', (e) => {

    if(!isHeroDragging) return;

    const heroRect =
    heroSection.getBoundingClientRect();

    heroGlass.style.left =
    (e.clientX - heroRect.left - heroShiftX) + 'px';

    heroGlass.style.top =
    (e.clientY - heroRect.top - heroShiftY) + 'px';
});


document.addEventListener('mouseup', () => {

    isHeroDragging = false;

    document.body.style.cursor = 'default';
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