// SCRIPT HAHA

document.addEventListener("DOMContentLoaded", function () {
    const scrollArrow = document.getElementById("scrollArrow");
    const countdownElement = document.getElementById("countdown");

    // Strzałka znika po przewinięciu
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            scrollArrow.classList.add("hidden");
        } else {
            scrollArrow.classList.remove("hidden");
        }
    });

    // Funkcja do aktualizacji zegara
    function updateCountdown() {
        const targetDate = new Date("2025-05-29T10:00:00").getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            countdownElement.innerHTML = "00:00:00:00";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Format DD:HH:MM:SS
        countdownElement.innerHTML = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // Odświeżanie zegara co sekundę
    updateCountdown();
    setInterval(updateCountdown, 1000);
});