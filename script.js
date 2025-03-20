document.addEventListener("DOMContentLoaded", function () {
    /* =====================
       DARK MODE TOGGLE
    ===================== */
    const toggleButton = document.querySelector(".dark-mode-toggle");
    
    if (toggleButton) {
        // Check localStorage for dark mode setting
        const isDarkMode = localStorage.getItem("darkMode") === "enabled";

        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            toggleButton.textContent = "Light Mode";
        }

        // Toggle dark mode and store preference
        toggleButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            const mode = document.body.classList.contains("dark-mode") ? "enabled" : "disabled";
            localStorage.setItem("darkMode", mode);
            toggleButton.textContent = mode === "enabled" ? "Light Mode" : "Dark Mode";
        });
    }

    /* =====================
       SMOOTH SCROLLING
    ===================== */
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            
            const targetElement = document.querySelector(this.getAttribute("href"));
            if (!targetElement) return;

            // Calculate offset to prevent overlap with fixed navigation bar
            const navHeight = document.querySelector("nav").offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 10;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });

    /* =====================
       TAB NAVIGATION WITH ANIMATIONS
    ===================== */
    function showTab(tabId) {
        const activeTab = document.querySelector(".tab-content:not(.hidden)");
        const newTab = document.getElementById(tabId);

        if (!newTab || (activeTab && activeTab === newTab)) return;

        // Hide current tab with fade-out effect
        if (activeTab) {
            gsap.to(activeTab, { opacity: 0, y: 20, duration: 0.4, onComplete: () => activeTab.classList.add("hidden") });
        }

        // Delay showing new tab for smooth transition
        setTimeout(() => {
            newTab.classList.remove("hidden");
            gsap.fromTo(newTab, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
        }, 400);

        // Update active tab button styling
        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active-tab"));
        document.querySelector(`[data-tab="${tabId}"]`).classList.add("active-tab");
    }

    document.querySelectorAll(".tab-btn").forEach(button => {
        button.addEventListener("click", function () {
            showTab(this.dataset.tab);
        });
    });

    // Set default tab on page load
    showTab("about");

    /* =====================
       BACK TO TOP BUTTON
    ===================== */
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

    /* =====================
       HOVER EFFECTS WITH ANIMATIONS
    ===================== */
    document.querySelectorAll(".skill-card, .experience-card, .project-card").forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    /* =====================
       FORM VALIDATION & SUBMISSION
    ===================== */
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Fetch input fields
            let name = document.querySelector("#contact-name")?.value.trim() || "";
            let email = document.querySelector("#contact-email")?.value.trim() || "";
            let message = document.querySelector("#contact-message")?.value.trim() || "";

            // Basic field validation
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Email format validation using regex
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email.");
                return;
            }

            // Successful form submission
            alert("Message Sent Successfully!");
            contactForm.reset();
        });
    }

    /* =====================
       IMAGE LAZY LOADING
    ===================== */
    const lazyImages = document.querySelectorAll("img.lazy-load");

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove("lazy-load");
                    lazyImageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => lazyImageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove("lazy-load");
        });
    }
});
