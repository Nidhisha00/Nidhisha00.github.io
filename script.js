```javascript
// ===============================
// Smooth Scrolling Navigation
// ===============================

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";

    }

    else {

        header.style.boxShadow = "none";

    }

});


// ===============================
// Fade-in Animation on Scroll
// ===============================

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition =
        "all 0.8s ease";

    observer.observe(section);

});


// ===============================
// Console Greeting
// ===============================

console.log(
    "Welcome to Nidhisha Raj P's Portfolio 🚀"
);
```
