// scripts.js — Shared site-wide scripts for Restart Repairs
// Last updated: Optimized for performance, safety, and maintainability

// =============================================
// 1. SLIDER / CAROUSEL (auto-runs only if present)
// =============================================
function initSlider() {
    const slides = document.getElementsByClassName("mySlides");
    const dots   = document.getElementsByClassName("dot");

    // Early exit if no slider exists on this page
    if (slides.length === 0) {
        return; // Silent exit — no console spam in production
    }

    let slideIndex = 0;
    let timeoutId = null;

    function showSlides() {
        // Hide all slides
        Array.from(slides).forEach(slide => {
            slide.style.display = "none";
        });

        slideIndex = (slideIndex + 1) % slides.length || slides.length;

        // Show current slide
        slides[slideIndex - 1].style.display = "block";

        // Update dots if they exist
        if (dots.length > 0) {
            Array.from(dots).forEach((dot, i) => {
                dot.className = dot.className.replace(" active-dot", "");
                if (i === slideIndex - 1) {
                    dot.className += " active-dot";
                }
            });
        }

        // Schedule next
        timeoutId = setTimeout(showSlides, 5000);
    }

    // Start animation
    showSlides();

    // Optional: pause on hover (uncomment if desired)
    /*
    const container = document.querySelector('.slideshow-container') || document.body;
    container.addEventListener('mouseenter', () => clearTimeout(timeoutId));
    container.addEventListener('mouseleave', showSlides);
    */
}

// =============================================
// 2. SPECS / DETAILS TOGGLE (for product cards)
// =============================================
function initSpecsToggle() {
    document.addEventListener('click', function(e) {
        const button = e.target.closest('.specs-button, .view-specs-outline, [data-toggle="specs"]');
        if (!button) return;

        const card = button.closest('.pc-card, .product-card, .card, .card-body');
        if (!card) return;

        const panel = card.querySelector('.specs-detail, .specs-panel, .specs-content');
        if (!panel) return;

        // Close all other open panels (improved UX)
        document.querySelectorAll('.specs-detail, .specs-panel, .specs-content').forEach(p => {
            if (p !== panel && p.style.display !== 'none') {
                p.style.display = 'none';
                // Optional: reset their toggle buttons
                const relatedBtn = card.querySelector('.specs-button, .view-specs-outline');
                if (relatedBtn && relatedBtn !== button) {
                    relatedBtn.textContent = 'View Specs';
                }
            }
        });

        // Toggle current panel
        const willShow = panel.style.display === 'none' || !panel.style.display;
        panel.style.display = willShow ? 'block' : 'none'; // change to 'flex'/'grid' if needed

        // Update button text
        button.textContent = willShow ? 'Hide Specs' : 'View Specs';
    });
}

// =============================================
// 3. GLOBAL INITIALIZATION
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize features that may or may not exist on the page
    initSlider();
    initSpecsToggle();

    // Future shared features can go here:
    // initCurrencyPicker();
    // initCartBadge();
    // initMobileMenu();
    // etc.
});

// =============================================
// Optional: Manual controls (if you add buttons later)
// =============================================
// Example usage: <button onclick="nextSlide()">Next</button>
// function nextSlide() { slideIndex++; showSlides(); }
// function prevSlide() { slideIndex--; if (slideIndex < 1) slideIndex = slides.length; showSlides(); }
// function currentSlide(n) { slideIndex = n; showSlides(); }
