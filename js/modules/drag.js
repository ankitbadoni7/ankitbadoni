// =====================
// DRAG - Hero Glass
// =====================
const glass = document.querySelector('.hero_glass');
const hero = document.querySelector('.hero');

let isDragging = false;
let shiftX = 0;
let shiftY = 0;

glass.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    const rect = glass.getBoundingClientRect();
    shiftX = e.clientX - rect.left;
    shiftY = e.clientY - rect.top;
    document.body.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const heroRect = hero.getBoundingClientRect();
    glass.style.left = (e.clientX - heroRect.left - shiftX) + 'px';
    glass.style.top  = (e.clientY - heroRect.top  - shiftY) + 'px';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'default';
});