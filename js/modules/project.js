// ===== IFRAME INTERACTION =====

const screens = document.querySelectorAll(".laptop_screen");

screens.forEach((screen)=>{

    const iframe = screen.querySelector("iframe");

    // ACTIVATE
    screen.addEventListener("click",(e)=>{

        e.stopPropagation();

        // REMOVE ACTIVE FROM ALL
        screens.forEach((s)=>{

            s.classList.remove("active");

            const frame = s.querySelector("iframe");

            frame.style.pointerEvents = "none";

        });

        // ACTIVATE CURRENT
        screen.classList.add("active");

        iframe.style.pointerEvents = "auto";

    });

});



// ===== CLICK OUTSIDE =====

document.addEventListener("click",()=>{

    screens.forEach((screen)=>{

        screen.classList.remove("active");

        const iframe = screen.querySelector("iframe");

        iframe.style.pointerEvents = "none";

    });

});