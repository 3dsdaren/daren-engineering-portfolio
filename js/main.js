// Navbar glass effect on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
if (window.scrollY > 30) {
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
revealElements.forEach((element) => {
const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;
const revealPoint = 120;

```
    if (elementTop < windowHeight - revealPoint) {
        element.classList.add("active");
    }
});
```

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Smooth closing behavior for mobile-style navigation
const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach((link) => {
link.addEventListener("click", () => {
revealOnScroll();
});
});

// Small premium mouse movement effect on hero image
const heroImage = document.querySelector(".hero-image img");

if (heroImage) {
document.addEventListener("mousemove", (event) => {
const x = (window.innerWidth / 2 - event.clientX) / 80;
const y = (window.innerHeight / 2 - event.clientY) / 80;

```
    heroImage.style.transform = `translate(${x}px, ${y}px) scale(1.01)`;
});

document.addEventListener("mouseleave", () => {
    heroImage.style.transform = "translate(0, 0) scale(1)";
});
```

}
