// ==============================
// Noor Ul Quran Online Academy
// script.js
// ==============================

document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded Successfully!");
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Hero button animation
const heroButtons = document.querySelectorAll(".hero-btn");

heroButtons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});

// Card hover animation
const cards = document.querySelectorAll(
    ".about-card, .course-card, .why-card, .teacher-card, .testimonial-card"
);

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transition = "0.3s";
    });
});

console.log("Welcome to Noor Ul Quran Online Academy ❤️");// Smooth fade on page load
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});// Page Fade Effect
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});