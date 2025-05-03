// Check if user has visited before
document.addEventListener('DOMContentLoaded', () => {
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (hasVisited === null) {
        // Show the first-time visitor UI
        document.querySelector('.first-time-section').style.display = 'block';
    } else {
        // Redirect to intent page if they've visited before
        window.location.href = '/intent.html';
    }
});

// Handle first-time response
function handleFirstTimeResponse(isFirstTime) {
    // Save the user's response
    localStorage.setItem('hasVisited', 'true');
    
    // Redirect to intent page
    window.location.href = '/intent.html';
} 