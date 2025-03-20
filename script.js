document.addEventListener("DOMContentLoaded", function () {
    /* =====================
       DARK MODE TOGGLE
    ===================== */
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    function applyDarkMode(isEnabled) {
        if (isEnabled) {
            document.body.classList.add("dark-mode");
            darkModeToggle.textContent = "Light Mode";
        } else {
            document.body.classList.remove("dark-mode");
            darkModeToggle.textContent = "Dark Mode";
        }
    }

    if (darkModeToggle) {
        // Retrieve user preference from localStorage
        const isDarkMode = localStorage.getItem("darkMode") === "enabled";
        applyDarkMode(isDarkMode);

        darkModeToggle.addEventListener("click", function () {
            const isEnabled = document.body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", isEnabled ? "enabled" : "disabled");
            applyDarkMode(isEnabled);
        });
    }

    /* =====================
       TAB NAVIGATION (Improved)
    ===================== */
    function showTab(tabId) {
        // Hide all tab contents
        document.querySelectorAll(".tab-content").forEach(tab => tab.style.display = "none");

        // Show the selected tab content
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.style.display = "block";
        }

        // Update active tab styling
        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active-tab"));
        const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeButton) {
            activeButton.classList.add("active-tab");
        }

        // Save the last viewed tab in localStorage
        localStorage.setItem("activeTab", tabId);
    }

    // Attach event listeners to tab buttons
    document.querySelectorAll(".tab-btn").forEach(button => {
        button.addEventListener("click", function () {
            showTab(this.dataset.tab);
        });
    });

    // Show the last viewed tab (or default to "about")
    const lastViewedTab = localStorage.getItem("activeTab") || "about";
    showTab(lastViewedTab);

    /* =====================
       FORM VALIDATION (Enhanced)
    ===================== */
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Get input values
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

            // Validate email with regex
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
                setTimeout(() => successMessage.classList.add("hidden"), 3000);
            }
        });
    }

    /* =====================
       SMOOTH SCROLLING & ACTIVE SECTION HIGHLIGHTING
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

            // Highlight active section
            document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active-tab"));
            this.classList.add("active-tab");
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

    /* =====================
       KEYBOARD NAVIGATION ACCESSIBILITY
    ===================== */
    document.addEventListener("keydown", function (e) {
        if (e.key === "Tab") {
            document.body.classList.add("user-is-tabbing");
        }
    });

    document.addEventListener("mousedown", function () {
        document.body.classList.remove("user-is-tabbing");
    });
});
