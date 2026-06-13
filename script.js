// =======================
// Typing Effect
// =======================

const heroTitle = document.querySelector(".hero-text h2");

if (heroTitle) {
    const texts = [
        "Electrical and Computer Engineering Student",
        "Machine Learning Enthusiast",
        "Full Stack Explorer",
        "IoT Innovator"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];

        if (!deleting) {
            heroTitle.textContent = currentText.substring(0, charIndex++);
        } else {
            heroTitle.textContent = currentText.substring(0, charIndex--);
        }

        let speed = deleting ? 50 : 100;

        if (!deleting && charIndex > currentText.length) {
            deleting = true;
            speed = 1500;
        }

        if (deleting && charIndex < 0) {
            deleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
}


// =======================
// Fade-in Animation
// =======================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);
});


// =======================
// Navbar Background Change
// =======================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector("header");

    if (window.scrollY > 50) {
        navbar.style.background = "#0b0f19";
    } else {
        navbar.style.background = "rgba(11,15,25,0.85)";
    }
});


// =======================
// Scroll to Top Button
// =======================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#8b5cf6";
scrollBtn.style.color = "white";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =======================
// Active Navigation Link
// =======================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "#d1d5db";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#8b5cf6";
        }

    });

});

});
     const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

if(dot && ring){

    document.addEventListener("mousemove", function(e){

        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";

        ring.style.left = e.clientX + "px";
        ring.style.top = e.clientY + "px";

    });

    const hoverItems =
        document.querySelectorAll("a, button");

    hoverItems.forEach(item => {

        item.addEventListener("mouseenter", () => {

            ring.style.width = "55px";
            ring.style.height = "55px";

            ring.style.borderColor = "#c084fc";

        });

        item.addEventListener("mouseleave", () => {

            ring.style.width = "35px";
            ring.style.height = "35px";

            ring.style.borderColor = "#8b5cf6";

        });

    });

}
