/* ==========================================
   PORTFOLIO
========================================== */

gsap.registerPlugin(ScrollTrigger);

/* ==========================================
   LENIS
========================================== */

const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);


/* ==========================================
   HERO ANIMATION
========================================== */

const heroTimeline = gsap.timeline();

heroTimeline
    .from(".hero-label", { opacity: 0, y: 40, duration: 0.8 })
    .from(".hero-title", { opacity: 0, y: 80, duration: 1 }, "-=.3")
    .from(".hero-description", { opacity: 0, y: 40, duration: .8 }, "-=.5")
    .from(".hero-heart", { opacity: 0, y: 20, duration: .6 }, "-=.4")
    .from(".hero-vinyl", { opacity: 0, scale: .8, x: 150, duration: 1.2 }, "-=.9")
    .from(".star", { opacity: 0, scale: .5, stagger: .15, duration: .8 }, "-=.8")
    .from(".sparkle", { opacity: 0, scale: 0, duration: .6 }, "-=.6");


/* ==========================================
   VINYL ROTATION
========================================== */

gsap.to(".hero-vinyl", {
    rotation: 360,
    repeat: -1,
    duration: 20,
    ease: "none",
    transformOrigin: "center center"
});


/* ==========================================
   FLOATING MARTINI
========================================== */

gsap.to(".martini", {
    y: -18,
    rotation: 4,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut"
});


/* ==========================================
   SECTION REVEALS
========================================== */

gsap.utils.toArray(".section").forEach(section => {

    gsap.from(section, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%"
        }
    });

});


/* ==========================================
   TRACK LIST
========================================== */

gsap.utils.toArray(".track").forEach((track, index) => {

    gsap.from(track, {
        opacity: 0,
        y: 60,
        duration: .9,
        delay: index * .1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: track,
            start: "top 88%"
        }
    });

});


/* ==========================================
   TIMELINE
========================================== */

gsap.from(".timeline-progress", {
    scaleX: 0,
    transformOrigin: "left center",
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".timeline",
        start: "top 75%"
    }
});

gsap.utils.toArray(".timeline-item").forEach((item, index) => {

    gsap.from(item, {
        opacity: 0,
        y: 60,
        duration: .8,
        delay: index * .1,
        scrollTrigger: {
            trigger: ".timeline",
            start: "top 75%"
        }
    });

});


/* ==========================================
   PARALLAX STARS
========================================== */

const stars = document.querySelectorAll(".star");

window.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    stars.forEach((star, index) => {

        gsap.to(star, {
            x: x * (index + 1) * 18,
            y: y * (index + 1) * 18,
            duration: 1
        });

    });

});


/* ==========================================
   PLAY BUTTON
========================================== */

document.querySelectorAll(".play-button").forEach(button => {

    button.addEventListener("mouseenter", () => {
        gsap.to(button, { x: 10, duration: .25 });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, { x: 0, duration: .25 });
    });

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
        menuButton.textContent = mobileMenu.classList.contains("open") ? "✕" : "☰";
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            menuButton.textContent = "☰";
        });
    });

}


/* ==========================================
   ACTIVE NAV
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        if (scrollY >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});