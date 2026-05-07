const cvBtn = document.getElementById("cvBtn");
const cvIcon = document.getElementById("cvIcon");

let iconInterval;

cvBtn.addEventListener("mouseenter", () => {

    const frames = ["↓", "⇩", "⬇", "✓"];
    let i = 0;

    iconInterval = setInterval(() => {
        cvIcon.textContent = frames[i];
        i++;

        if (i >= frames.length) {
            clearInterval(iconInterval);
        }

    }, 180);
});

cvBtn.addEventListener("mouseleave", () => {

    clearInterval(iconInterval);

    cvIcon.textContent = "↓";
});