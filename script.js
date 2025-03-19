// 🌙 DARK MODE TOGGLE (With Local Storage)
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

// 🔗 SMOOTH SCROLLING NAVIGATION
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// 📊 ANIMATE SKILL PROGRESS BARS ON SCROLL
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

// ✍️ TYPEWRITER EFFECT FOR HERO SECTION
const typewriterText = document.querySelector(".hero-section h2");
const textArray = ["Senior Data Analyst", "AI & Machine Learning Specialist", "Data-Driven Innovator"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typewriterText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            typewriterText.textContent = "";
            charIndex = 0;
            textIndex = (textIndex + 1) % textArray.length;
            typeEffect();
        }, 2000);
    }
}

typeEffect();

// 🔝 BACK TO TOP BUTTON
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

// ✅ DOWNLOAD RESUME CONFIRMATION PROMPT
const resumeLink = document.querySelector("a[download]");
resumeLink.addEventListener("click", function (e) {
    e.preventDefault();
    const confirmDownload = confirm("Do you want to download Jean-Luc's resume?");
    if (confirmDownload) {
        window.location.href = resumeLink.getAttribute("href");
    }
});

// 🎭 HOVER EFFECTS FOR EXPERIENCE CARDS
document.querySelectorAll(".experience-card").forEach(card => {
    card.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.05)";
        this.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.2)";
    });
    card.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.1)";
    });
});

// 🎨 LAZY LOAD IMAGES FOR PERFORMANCE
const lazyImages = document.querySelectorAll("img");

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

// 🚀 GSAP ANIMATIONS FOR SECTIONS
gsap.from(".hero-section", { opacity: 0, y: -50, duration: 1 });
gsap.from(".skills-container", { opacity: 0, x: -50, duration: 1, delay: 0.5 });
gsap.from(".experience-container", { opacity: 0, x: 50, duration: 1, delay: 0.7 });
gsap.from(".contact-section", { opacity: 0, scale: 0.8, duration: 1, delay: 1 });

// 🔀 RANDOM QUOTE GENERATOR IN FOOTER
const quotes = [
    "Data is the new oil – Clive Humby",
    "Without data, you're just another person with an opinion – W. Edwards Deming",
    "In God we trust. All others must bring data – W. Edwards Deming"
];

document.querySelector("footer p").innerText = quotes[Math.floor(Math.random() * quotes.length)];

// 🏆 INTERACTIVE PROJECT CAROUSEL
let currentSlide = 0;
const slides = document.querySelectorAll(".project-card");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

document.querySelector(".next").addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

document.querySelector(".prev").addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

// Initialize first slide
showSlide(0);
