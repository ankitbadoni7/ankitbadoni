

function updateDateTime(){

    const now = new Date();

    const dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    document.getElementById("liveDate").textContent =
        now.toLocaleDateString("en-IN", dateOptions);

    document.getElementById("liveTime").textContent =
        now.toLocaleTimeString("en-IN", timeOptions);
}

updateDateTime();

setInterval(updateDateTime, 1000);

