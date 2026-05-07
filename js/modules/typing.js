// =====================
// TYPING EFFECT
// =====================
const roles = ["designer", "developer"];
const el = document.getElementById("typing-role");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const current = roles[roleIndex];

    if (!isDeleting) {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();