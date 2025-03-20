document.addEventListener("DOMContentLoaded", function () {
    /* =====================
       DARK MODE TOGGLE
    ===================== */
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    if (darkModeToggle) {
        // Check localStorage for dark mode setting
        const isDarkMode = localStorage.getItem("darkMode") === "enabled";

        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            darkModeToggle.textContent = "Light Mode";
        }

        // Toggle dark mode and store preference
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            const mode = document.body.classList.contains("dark-mode") ? "enabled" : "disabled";
            localStorage.setItem("darkMode", mode);
            darkModeToggle.textContent = mode === "enabled" ? "Light Mode" : "Dark Mode";
        });
    }

    /* =====================
       TAB NAVIGATION FIX
    ===================== */
    function showTab(tabId) {
        // Hide all tab contents
        document.querySelectorAll(".tab-content").forEach(tab => {
            tab.style.display = "none";
        });

        // Show the selected tab content
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.style.display = "block";
        }

        // Remove active class from all buttons
        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.classList.remove("active-tab");
        });

        // Add active class to clicked button
        const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeButton) {
            activeButton.classList.add("active-tab");
        }
    }

    // Event listeners for tab buttons
    document.querySelectorAll(".tab-btn").forEach(button => {
        button.addEventListener("click", function () {
            const tabId = this.dataset.tab;
            showTab(tabId);
        });
    });

    // Show the "About Me" tab by default on page load
    showTab("about");

    /* =====================
       FORM VALIDATION
    ===================== */
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Fetch input fields
            let name = document.querySelector("#contact-name").value.trim();
            let email = document.querySelector("#contact-email").value.trim();
            let message = document.querySelector("#contact-message").value.trim();

            // Error message elements
            let nameError = document.querySelector("#name-error");
            let emailError = document.querySelector("#email-error");
            let messageError = document.querySelector("#message-error");
            let successMessage = document.querySelector("#form-success-message");

            // Reset errors
            nameError.classList.add("hidden");
            emailError.classList.add("hidden");
            messageError.classList.add("hidden");

            let isValid = true;

            // Validate name
            if (!name) {
                nameError.classList.remove("hidden");
                isValid = false;
            }

            // Validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                emailError.classList.remove("hidden");
                isValid = false;
            }

            // Validate message
            if (!message) {
                messageError.classList.remove("hidden");
                isValid = false;
            }

            // If all fields are valid, show success message
            if (isValid) {
                successMessage.classList.remove("hidden");
                contactForm.reset();
            }
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

            const navHeight = document.querySelector("nav").offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 10;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });

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
});
