// Smooth scrolling and animations
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Video hover effects
  const phoneFrames = document.querySelectorAll(".phone-frame");
  phoneFrames.forEach((frame) => {
    const video = frame.querySelector("video");
    const playButton = frame.querySelector(".play-button");

    frame.addEventListener("mouseenter", function () {
      if (video) video.play();
    });

    frame.addEventListener("mouseleave", function () {
      if (video) video.pause();
    });

    if (playButton) {
      playButton.addEventListener("click", function () {
        if (video) {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        }
      });
    }
  });

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scrollTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Active nav link highlighting
  const sections = document.querySelectorAll("section");
  const navLinksArray = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinksArray.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Parallax effect for background
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector("body::before");
    // Subtle parallax effect through transform
  });

  // Initialize first section as visible
  document.querySelector("#home").classList.add("visible");
});
