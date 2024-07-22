document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
        navbarToggle.classList.toggle('active');
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('.navbar-item a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
});

// Navbar toggle functionality for mobile view
document.getElementById('navbar-toggle').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.navbar-menu').classList.toggle('active');
});


const servicesSection = document.getElementById('services');

window.addEventListener('scroll', () => {
  if (servicesSection.offsetTop - window.innerHeight / 1.3 < window.scrollY) {
    servicesSection.classList.add('in-view');
  } else {
    servicesSection.classList.remove('in-view');
  }
});


// Function to close the mobile menu
function closeMenu() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    // Toggle the 'active' class on the menu toggle button
    navbarToggle.classList.remove('active');

    // Hide the navbar menu by removing the 'active' class
    navbarMenu.classList.remove('active');
}

// Add event listeners to each navbar item to close menu on click
document.querySelectorAll('.navbar-item a').forEach(item => {
    item.addEventListener('click', closeMenu);
});


let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Loop back to the last slide
    } else {
        currentSlide = index;
    }

    // Hide all slides and show the current slide
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

// Function to change slide
function changeSlide(n) {
    showSlide(currentSlide + n);
}

// Initialize the first slide
showSlide(currentSlide);


// iframe width height

