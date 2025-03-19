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

// Smooth Scrolling Navigation
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// GSAP Animations for Section Load-In
gsap.from(".hero-section", { opacity: 0, y: -50, duration: 1 });
gsap.from(".tabs", { opacity: 0, scale: 0.8, duration: 1, delay: 0.5 });
gsap.from(".tab-content", { opacity: 0, y: 20, duration: 1, delay: 0.8 });

// Dynamic Tab Navigation with GSAP Effects
function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => {
        gsap.to(tab, { opacity: 0, y: 20, duration: 0.5, onComplete: () => tab.classList.add("hidden") });
    });

    setTimeout(() => {
        document.getElementById(tabId).classList.remove("hidden");
        gsap.fromTo(`#${tabId}`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
    }, 500);

    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active-tab"));
    event.target.classList.add("active-tab");
}

// Animate Skill Progress Bars on Scroll
const skillBars = document.querySelectorAll(".progress-bar");
const skillSection = document.querySelector(".skills-container");

function animateSkills() {
    if (skillSection.getBoundingClientRect().top < window.innerHeight * 0.75) {
        skillBars.forEach(bar => {
            let width = bar.getAttribute("data-width");
            bar.style.width = width + "%";
        });
    }
}

window.addEventListener("scroll", animateSkills);

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

// AI-Powered Project Suggestions
const projectData = [
    { id: 1, title: "AI Earnings Call Analyzer", tags: ["AI", "Finance", "NLP"], link: "project1.html" },
    { id: 2, title: "HR Attrition Prediction", tags: ["Machine Learning", "HR"], link: "project2.html" },
    { id: 3, title: "Wind Turbines Market Analysis", tags: ["Big Data", "Energy"], link: "project3.html" }
];

function suggestProjects() {
    let selectedTag = "AI";
    let suggestedProjects = projectData.filter(project => project.tags.includes(selectedTag));

    let projectContainer = document.getElementById("project-suggestions");
    projectContainer.innerHTML = "";
    suggestedProjects.forEach(project => {
        let projectCard = document.createElement("div");
        projectCard.className = "project-card";
        projectCard.innerHTML = `
            <p class="text-center mt-2 font-semibold">${project.title}</p>
            <a href="${project.link}" class="btn">View Project</a>
        `;
        projectContainer.appendChild(projectCard);
    });
}

suggestProjects();

// Real-Time Statistics Counter
const stats = [
    { id: "years-exp", value: 8, suffix: "+" },
    { id: "projects-done", value: 25, suffix: "" }
];

function animateCounters() {
    stats.forEach(stat => {
        let counter = document.getElementById(stat.id);
        let count = 0;
        let target = stat.value;
        let increment = target / 100;

        function updateCounter() {
            count += increment;
            counter.textContent = Math.floor(count) + stat.suffix;
            if (count < target) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + stat.suffix;
            }
        }
        updateCounter();
    });
}

window.addEventListener("scroll", function () {
    let statsSection = document.getElementById("stats");
    if (statsSection.getBoundingClientRect().top < window.innerHeight * 0.75) {
        animateCounters();
    }
});

// Lazy Load Images for Performance Optimization
const lazyImages = document.querySelectorAll("img[data-src]");

const lazyObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            lazyObserver.unobserve(entry.target);
        }
    });
});

lazyImages.forEach(image => {
    lazyObserver.observe(image);
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

// Interactive Hover Effects
document.querySelectorAll(".experience-card").forEach(card => {
    card.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});
