/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

/* Global Styles */
body {
    font-family: 'Poppins', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    transition: background-color 0.3s, color 0.3s;
}

/* Dark Mode */
.dark-mode {
    background-color: #1a202c;
    color: #f4f4f4;
}

.dark-mode nav {
    background-color: #2d3748;
}

.dark-mode a {
    color: #90cdf4;
}

/* Navigation */
nav {
    background: linear-gradient(135deg, #2b6cb0, #3182ce);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    padding: 14px;
    transition: all 0.3s ease-in-out;
}

/* Hero Section */
.hero-section {
    text-align: center;
    padding: 100px 20px;
    background: linear-gradient(135deg, #4299e1, #2b6cb0);
    color: white;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
}

.hero-section h1 {
    font-size: 3.5rem;
    font-weight: bold;
    animation: fadeInDown 1s ease-in-out;
}

.hero-section h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 10px;
    animation: fadeInUp 1s ease-in-out;
}

/* Tab Navigation */
.tabs {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.tab-btn {
    background: #e0e0e0;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.tab-btn:hover, .active-tab {
    background: #3182ce;
    color: white;
    transform: scale(1.05);
}

/* Tab Content */
.tab-content {
    display: none;
    animation: fadeIn 0.5s ease-in-out;
}

.tab-content:first-child {
    display: block;
}

/* Skills Section */
.skill-card {
    background: white;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.skill-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

/* Experience Section */
.experience-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    gap: 20px;
    transition: transform 0.3s ease-in-out;
}

.experience-card img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 8px;
}

.experience-card:hover {
    transform: translateY(-5px);
}

/* Projects Section */
.project-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    transition: transform 0.3s ease-in-out;
}

.project-card img {
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
}

.project-card:hover img {
    transform: scale(1.1);
}

/* Contact Section */
.contact-section {
    background: linear-gradient(135deg, #2b6cb0, #4299e1);
    color: white;
    text-align: center;
    padding: 60px 20px;
}

.contact-section a {
    font-weight: bold;
    transition: color 0.3s ease-in-out;
}

.contact-section a:hover {
    color: #cbd5e0;
}

/* Buttons */
button {
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

button:hover {
    transform: scale(1.05);
}

/* Footer */
footer {
    background: #2c5282;
    color: white;
    text-align: center;
    padding: 20px;
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-section h1 {
        font-size: 2.5rem;
    }

    .hero-section h2 {
        font-size: 1.5rem;
    }

    .experience-card {
        flex-direction: column;
        text-align: center;
    }

    .skill-card {
        width: 100%;
    }
}
