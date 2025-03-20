document.addEventListener("DOMContentLoaded", function () {
    /* =====================
       DARK MODE TOGGLE
    ===================== */
    const toggleButton = document.getElementById("dark-mode-toggle");
    
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
       TAB NAVIGATION FIXED
    ===================== */
    function showTab(tabId) {
        const allTabs = document.querySelectorAll(".tab-content");
        const activeTab = document.querySelector(`#${tabId}`);

        // Hide all tabs
        allTabs.forEach(tab => {
            tab.classList.add("hidden");
        });

        // Show selected tab
        if (activeTab) {
            activeTab.classList.remove("hidden");
        }

        // Update active tab button styling
        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active-tab"));
        document.querySelector(`[data-tab="${tabId}"]`).classList.add("active-tab");
    }

    // Attach event listeners to all tab buttons
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
    backToTop.classList.add("back-to-top", "hidden");
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            backToTop.classList.remove("hidden");
        } else {
            backToTop.classList.add("hidden");
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* =====================
       HOVER EFFECTS FIXED
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
       FORM VALIDATION & SUBMISSION FIXED
    ===================== */
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("contact-name")?.value.trim();
            const email = document.getElementById("contact-email")?.value.trim();
            const subject = document.getElementById("contact-subject")?.value.trim();
            const message = document.getElementById("contact-message")?.value.trim();
            const successMessage = document.getElementById("form-success-message");

            if (!name || !email || !message) {
                alert("Please fill in all required fields.");
                return;
            }

            // Email format validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Show success message and reset form
            if (successMessage) {
                successMessage.classList.remove("hidden");
                setTimeout(() => {
                    successMessage.classList.add("hidden");
                }, 4000);
            }

            contactForm.reset();
        });
    }

    /* =====================
       IMAGE LAZY LOADING FIXED
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
