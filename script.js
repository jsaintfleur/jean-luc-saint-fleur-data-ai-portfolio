// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    let button = document.querySelector(".dark-mode-toggle");
    button.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
}

// Smooth Scroll for Navigation
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// Animate Skill Progress Bars
document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach(bar => {
        let width = bar.getAttribute("data-width");
        bar.style.width = width + "%";
    });
});

