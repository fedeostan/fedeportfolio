// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (hasVisited === null) {
        // Show the first-time visitor UI
        document.querySelector('.first-time-section').style.display = 'block';
    } else {
        // Redirect to intent page if they've visited before
        window.location.href = 'intent.html';
    }

    // Add fade-in animation to main content
    document.querySelector('main').classList.add('fade-in');

    // Initialize Bootstrap tooltips if needed
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Handle first-time response
function handleFirstTimeResponse(isFirstTime) {
    // Save the user's response
    localStorage.setItem('hasVisited', 'true');
    
    // Add a smooth transition before redirecting
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    // Redirect to intent page after a short delay
    setTimeout(() => {
        window.location.href = 'intent.html';
    }, 500);
} 