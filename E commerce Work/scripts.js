let slideIndex = 0;

// This function starts the slider
function initSlider() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // SAFETY CHECK: If there are no slides on this page, stop the script!
    if (slides.length === 0) {
        console.log("No slider found on this page. Skipping slider script.");
        return; 
    }

    showSlides();
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;

    // Loop back to the first slide
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Reset dots (Safety check for dots too)
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    // Show current slide and activate current dot
    slides[slideIndex - 1].style.display = "block";  
    
    // Only try to update dots if they actually exist in the HTML
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active-dot";
    }

    // Change every 5 seconds
    setTimeout(showSlides, 5000); 
}

// Start the process
initSlider();
// Function to toggle Specs visibility
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('specs-button')) {
        // Find the specs-detail box next to this button
        const cardBody = event.target.closest('.card-body');
        const specs = cardBody.querySelector('.specs-detail');
        
        // Toggle the display
        if (specs.style.display === "block") {
            specs.style.display = "none";
            event.target.innerText = "View Specs";
        } else {
            specs.style.display = "block";
            event.target.innerText = "Hide Specs";
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. SLIDER LOGIC WITH CHECK --- */
    let slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Only run if slides actually exist on the current page
    if (slides.length > 0) {
        showSlides();
    } else {
        console.log("No slider detected on this page. Specialized scripts inactive.");
    }

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }    
        
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active-dot", "");
        }
        
        if (slides[slideIndex-1]) {
            slides[slideIndex-1].style.display = "block";  
        }
        if (dots[slideIndex-1]) {
            dots[slideIndex-1].className += " active-dot";
        }
        
        setTimeout(showSlides, 5000); 
    }

    /* --- 2. PRODUCT SPECS OVERLAY --- */
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.pc-card, .product-card');
        if (!card) return;

        const specsPanel = card.querySelector('.specs-panel, .specs-detail');

        if (e.target.classList.contains('view-specs-outline') || e.target.classList.contains('specs-button')) {
            if (specsPanel) {
                const isHidden = getComputedStyle(specsPanel).display === "none";
                document.querySelectorAll('.specs-panel, .specs-detail').forEach(p => p.style.display = 'none');
                specsPanel.style.display = isHidden ? "flex" : "none";
            }
        }
    });
});