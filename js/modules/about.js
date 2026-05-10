// Glass strip
const track = document.querySelector(".glass_marquee_track");

if (track) {

    const original = track.innerHTML;

    // duplicate ONCE only
    track.innerHTML = original + original;

    let pos = 0;
    const speed = 0.8; // smoother, less jank

    let halfWidth = track.scrollWidth / 2;

    function animate() {

        pos -= speed;

        // smoother loop (no jump feel)
        if (Math.abs(pos) >= halfWidth) {
            pos += halfWidth;
        }

        track.style.transform = `translate3d(${pos}px,0,0)`;

        requestAnimationFrame(animate);
    }

    // recalc on load (important for images/fonts)
    window.addEventListener("load", () => {
        halfWidth = track.scrollWidth / 2;
        animate();
    });
}



/* ===== EXPERIENCE CARD ===== */

document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.getElementById('openExperience');
    const card = document.getElementById('expCard');

    if (!openBtn || !card) {
        console.log("Missing elements:", { openBtn, card });
        return;
    }

    let isOpen = false;

    function openCard() {
        card.classList.add('active');
        isOpen = true;
    }

    function closeCard() {
        card.classList.remove('active');
        isOpen = false;
    }

    /* TOGGLE BUTTON */
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        isOpen ? closeCard() : openCard();
    });

    /* OUTSIDE CLICK CLOSE */
    document.addEventListener('click', (e) => {
        if (!isOpen) return;
        if (!card.contains(e.target) && e.target !== openBtn) {
            closeCard();
        }
    });

    /* ESC CLOSE */
    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && isOpen) {
            closeCard();
        }
    });

    /* SCROLL CLOSE */
    window.addEventListener('scroll', () => {
        if (isOpen) closeCard();
    }, { passive: true });

});