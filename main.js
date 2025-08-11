document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';

        if (hours === 0) {
            hours = 12;
        } else if (hours > 12) {
            hours -= 12;
        }

        document.getElementById('time-display').textContent = `${hours}:${minutes} ${ampm}`;
    }

    // Update every second so it stays perfectly in sync
    setInterval(updateTime, 1000);
    updateTime();
});
document.getElementById("ABTMETOGGLE").addEventListener("click", function() {
    let hidden = document.querySelector(".aboutme-cont");
    if (hidden.style.display === "none" || hidden.style.display === "") {
        hidden.style.display = 'block';
    } else {
        hidden.style.display = "none";
    }
});
document.querySelector(".aboutme-x").addEventListener("click", function () {
    document.querySelector(".aboutme-cont").style.display = "none";
});
document.getElementById("PORTTOGGLE").addEventListener("click", function() {
    let hidden = document.querySelector(".portfolio-cont");
    if (hidden.style.display === "none" || hidden.style.display === "") {
        hidden.style.display = 'block';
    } else {
        hidden.style.display = "none";
    }
});
document.querySelector(".portfolio-x").addEventListener("click", function () {
    document.querySelector(".portfolio-cont").style.display = "none";
});