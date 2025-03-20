document.addEventListener("DOMContentLoaded", function () {
    /* =====================
       DARK MODE TOGGLE
    ===================== */
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        const isDarkMode = localStorage.getItem("darkMode") === "enabled";

        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            darkModeToggle.textContent = "Light Mode";
        }

        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            const mode = document.body.classList.contains("dark-mode") ? "enabled" : "disabled";
            localStorage.setItem("darkMode", mode);
            darkModeToggle.textContent = mode === "enabled" ? "Light Mode" : "Dark Mode";
        });
    }

    /* =====================
       TAB NAVIGATION
    ===================== */
    function showTab(tabId) {
        document.querySelectorAll(".tab-content").forEach(tab => {
            tab.classList.add("hidden");
        });

        const activeTab = document.getElementById(tabId);
        if (activeTab) {
            activeTab.classList.remove("hidden");
        }

        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.classList.remove("active-tab");
            btn.setAttribute("aria-selected", "false");
        });

        const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
        if (selectedButton) {
            selectedButton.classList.add("active-tab");
            selectedButton.setAttribute("aria-selected", "true");
        }
    }

    document.querySelectorAll(".tab-btn").forEach(button => {
        button.addEventListener("click", function () {
            showTab(this.dataset.tab);
        });

        button.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                showTab(this.dataset.tab);
            }
        });
    });

    showTab("about"); // Default active tab

    /* =====================
       FORM VALIDATION
    ===================== */
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const subject = document.getElementById("contact-subject").value.trim();
            const message = document.getElementById("contact-message").value.trim();
            const successMessage = document.getElementById("form-success-message");

            const nameError = document.getElementById("name-error");
            const emailError = document.getElementById("email-error");
            const messageError = document.getElementById("message-error");

            let isValid = true;

            nameError.classList.add("hidden");
            emailError.classList.add("hidden");
            messageError.classList.add("hidden");

            if (name === "") {
                nameError.classList.remove("hidden");
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                emailError.classList.remove("hidden");
                isValid = false;
            }

            if (message === "") {
                messageError.classList.remove("hidden");
                isValid = false;
            }

            if (isValid) {
                successMessage.classList.remove("hidden");
                setTimeout(() => {
                    successMessage.classList.add("hidden");
                }, 4000);
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
            if (targetElement) {
                const navHeight = document.querySelector("nav").offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 10;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
