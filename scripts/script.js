    document.addEventListener("DOMContentLoaded", function() {
        const durationElements = document.querySelectorAll(".duration");

        durationElements.forEach(function(element) {
            const startDate = new Date(element.getAttribute("data-start"));
            const endDate = element.getAttribute("data-ended") ? new Date(element.getAttribute("data-ended")) : new Date();
            
            let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
            
            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;
            
            let durationText = "";
            if (years > 0) {
                durationText += `${years} yr${years > 1 ? 's' : ''} `;
            }
            if (months > 0 || years === 0) { // Ensure we display months even if there are no years
                durationText += `${months} mo${months > 1 ? 's' : ''}`;
            }
            
            element.textContent = durationText.trim(); // Update the span with the calculated duration
        });
    });

    document.querySelectorAll('nav a, .footer-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Check if the href is a section link or a page link
        if (href.startsWith('#')) {
            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        // If it's a page link (e.g., 'music-career.html'), allow the default behavior
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Calculate duration for work history
    const durationElements = document.querySelectorAll(".duration");
    durationElements.forEach(function(element) {
        const startDate = new Date(element.getAttribute("data-start"));
        const endDate = element.getAttribute("data-ended") ? new Date(element.getAttribute("data-ended")) : new Date();
        
        let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
        
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;
        
        let durationText = "";
        if (years > 0) {
            durationText += `${years} yr${years > 1 ? 's' : ''} `;
        }
        if (months > 0 || years === 0) {
            durationText += `${months} mo${months > 1 ? 's' : ''}`;
        }
        
        element.textContent = durationText.trim();
    });

    // Randomize coffee count daily based on Riyadh time
    const coffeeCountElement = document.getElementById('coffee-count');
    const currentDate = new Date();
    
    // Calculate the current date in Riyadh timezone (UTC+3)
    const riyadhTime = new Date(currentDate.toLocaleString("en-US", { timeZone: "Asia/Riyadh" }));
    const riyadhDate = riyadhTime.toISOString().split('T')[0];
    
    // Generate a random number between 4 and 9
    function generateRandomCoffeeCount() {
        return Math.floor(Math.random() * 6) + 4;
    }
    
    // Save the randomized coffee count in localStorage for 24 hours
    const savedDate = localStorage.getItem('coffeeDate');
    const savedCount = localStorage.getItem('coffeeCount');
    
    if (savedDate === riyadhDate && savedCount !== null) {
        coffeeCountElement.textContent = savedCount;
    } else {
        const randomCount = generateRandomCoffeeCount();
        localStorage.setItem('coffeeDate', riyadhDate);
        localStorage.setItem('coffeeCount', randomCount);
        coffeeCountElement.textContent = randomCount;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`; // Staggering delay
        element.classList.add('slide-in');
    });
});