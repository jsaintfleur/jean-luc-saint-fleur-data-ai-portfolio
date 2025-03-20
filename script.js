document.addEventListener("DOMContentLoaded", function () {
    /* =====================
       DARK MODE TOGGLE
    ===================== */
    const toggleButton = document.querySelector("#dark-mode-toggle");

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
       TAB NAVIGATION FUNCTION
    ===================== */
    function showTab(tabId) {
        const activeTab = document.querySelector(".tab-content:not(.hidden)");
        const newTab = document.getElementById(tabId);

        if (!newTab || (activeTab && activeTab === newTab)) return;

        // Hide current tab smoothly
        if (activeTab) {
            activeTab.classList.add("opacity-0");
            setTimeout(() => activeTab.classList.add("hidden"), 300);
        }

        // Show new tab with animation
        setTimeout(() => {
            newTab.classList.remove("hidden", "opacity-0");
            newTab.classList.add("opacity-100");
        }, 300);

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
       SMOOTH SCROLLING FOR INTERNAL LINKS
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
    backToTop.classList.add("back-to-top", "hidden");
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            backToTop.classList.remove("hidden");
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
            setTimeout(() => backToTop.classList.add("hidden"), 300);
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* =====================
       FORM VALIDATION & SUBMISSION
    ===================== */
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Fetch input fields
            let name = document.querySelector("#contact-name")?.value.trim() || "";
            let email = document.querySelector("#contact-email")?.value.trim() || "";
            let message = document.querySelector("#contact-message")?.value.trim() || "";
            let successMessage = document.querySelector("#form-success-message");

            // Basic field validation
            let isValid = true;

            if (!name) {
                document.querySelector("#name-error").classList.remove("hidden");
                isValid = false;
            } else {
                document.querySelector("#name-error").classList.add("hidden");
            }

            if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                document.querySelector("#email-error").classList.remove("hidden");
                isValid = false;
            } else {
                document.querySelector("#email-error").classList.add("hidden");
            }

            if (!message) {
                document.querySelector("#message-error").classList.remove("hidden");
                isValid = false;
            } else {
                document.querySelector("#message-error").classList.add("hidden");
            }

            // Successful form submission
            if (isValid) {
                successMessage.classList.remove("hidden");
                contactForm.reset();
                setTimeout(() => successMessage.classList.add("hidden"), 5000);
            }
        });
    }

    /* =====================
       RESPONSIVE DESIGN ADJUSTMENTS
    ===================== */
    function adjustTabsForScreenSize() {
        const isMobile = window.innerWidth < 768;
        document.querySelectorAll(".tab-btn").forEach(button => {
            if (isMobile) {
                button.classList.add("w-full", "py-3");
            } else {
                button.classList.remove("w-full", "py-3");
            }
        });
    }

    adjustTabsForScreenSize();
    window.addEventListener("resize", adjustTabsForScreenSize);
});
