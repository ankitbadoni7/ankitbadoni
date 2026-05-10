
// =====================
// NAVBAR
// =====================
const menuBtn = document.getElementById("menu");
const navbar  = document.getElementById("navbar");
const track   = document.querySelector(".nav-track");
const items   = document.querySelectorAll(".nav-item");

let navbarJustOpened = false;

function resetLight() {
    track.classList.remove("light-on");
    track.style.removeProperty("--light-x");
}

function setLight(item) {
    const rect       = item.getBoundingClientRect();
    const parentRect = track.getBoundingClientRect();
    const x          = rect.left + rect.width / 2 - parentRect.left;

    track.style.setProperty("--light-x", x + "px");
    track.classList.add("light-on");
}

// Toggle navbar open/close
menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {

        navbarJustOpened = true;

        resetLight();

        // Wait for navbar open transition to finish,
        // then check if cursor is already on an item
        setTimeout(() => {

            navbarJustOpened = false;

            const hovered =
                document.querySelector(".nav-item:hover");

            if (hovered) setLight(hovered);

        }, 350);

    } else {

        resetLight();
    }
});

// Close navbar on outside click
document.addEventListener("click", (e) => {

    if (
        !navbar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {

        navbar.classList.remove("active");

        resetLight();
    }
});

// Hover light effect on nav items
items.forEach(item => {

    item.addEventListener("mouseenter", () => {

        if (navbarJustOpened) return;

        setLight(item);
    });

    item.addEventListener("mouseleave", resetLight);
});
// Hide navbar on scroll
window.addEventListener("scroll", () => {
    navbar.classList.remove("active");
    resetLight();
});