// =====================
// FLOATING BUBBLES
// =====================
document.querySelectorAll(".tech-bubble").forEach((bubble) => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    function animate() {
        const newX = Math.random() * window.innerWidth;
        const newY = Math.random() * window.innerHeight;

        bubble.animate(
            [
                { transform: `translate(${x}px, ${y}px)` },
                { transform: `translate(${newX}px, ${newY}px)` }
            ],
            {
                duration: 5000 + Math.random() * 4000,
                easing: "ease-in-out",
                fill: "forwards"
            }
        );

        x = newX;
        y = newY;

        setTimeout(animate, 6000 + Math.random() * 3000);
    }

    animate();
});