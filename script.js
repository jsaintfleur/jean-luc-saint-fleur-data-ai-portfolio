// Dark Mode Toggle with Local Storage
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".dark-mode-toggle");
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "Light Mode";
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const mode = document.body.classList.contains("dark-mode") ? "enabled" : "disabled";
        localStorage.setItem("darkMode", mode);
        toggleButton.textContent = mode === "enabled" ? "Light Mode" : "Dark Mode";
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Dynamic Tab Navigation with GSAP Animations
function showTab(tabId) {
    const activeTab = document.querySelector(".tab-content:not(.hidden)");
    const newTab = document.getElementById(tabId);

    if (activeTab && activeTab !== newTab) {
        gsap.to(activeTab, { opacity: 0, y: 20, duration: 0.4, onComplete: () => activeTab.classList.add("hidden") });
    }

    setTimeout(() => {
        newTab.classList.remove("hidden");
        gsap.fromTo(newTab, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
    }, 400);

    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active-tab"));
    event.target.classList.add("active-tab");
}

// Back to Top Button
const backToTop = document.createElement("button");
backToTop.innerText = "⬆ Top";
backToTop.classList.add("back-to-top");
document.body.appendChild(backToTop);

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Interactive Hover Effects
document.querySelectorAll(".skill-card, .experience-card, .project-card").forEach(card => {
    card.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});

// Contact Form Validation
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.querySelector("#contact-name").value.trim();
    let email = document.querySelector("#contact-email").value.trim();
    let message = document.querySelector("#contact-message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    alert("Message Sent Successfully!");
    this.reset();
});
