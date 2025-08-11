// Current page state
let currentPage = 0;
const totalPages = 4;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Start floating hearts animation
    startFloatingHearts();
    
    // Initialize page indicators
    updatePageIndicators();
    
    // Add click events to page indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToPage(index));
    });
});

// Page navigation functions
function nextPage() {
    if (currentPage < totalPages - 1) {
        goToPage(currentPage + 1);
    }
}

function prevPage() {
    if (currentPage > 0) {
        goToPage(currentPage - 1);
    }
}

function goToPage(pageNumber) {
    if (pageNumber >= 0 && pageNumber < totalPages) {
        // Hide current page
        const currentPageElement = document.getElementById(`page-${currentPage}`);
        currentPageElement.classList.remove('active');
        
        // Show new page with animation
        setTimeout(() => {
            currentPage = pageNumber;
            const newPageElement = document.getElementById(`page-${currentPage}`);
            newPageElement.classList.add('active');
            updatePageIndicators();
            
            // Add some cute effects
            createHeartBurst();
        }, 250);
    }
}

// Update page indicators
function updatePageIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentPage) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Floating hearts animation
function startFloatingHearts() {
    setInterval(createFloatingHeart, 2500);
}

function createFloatingHeart() {
    const heartsContainer = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    
    heart.className = 'floating-heart';
    heart.textContent = '💕';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '100%';
    
    heartsContainer.appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 3000);
}

// Create heart burst effect when changing pages
function createHeartBurst() {
    const heartsContainer = document.getElementById('hearts-container');
    const heartEmojis = ['💕', '💖', '💗', '💝', '💘'];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = (45 + Math.random() * 10) + '%';
            heart.style.top = '60%';
            heart.style.fontSize = '1.2rem';
            
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3000);
        }, i * 200);
    }
}

// Add some interactive effects
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        // Create mini heart burst on button click
        createMiniHeartBurst(e.target);
    }
});

function createMiniHeartBurst(button) {
    const rect = button.getBoundingClientRect();
    const heartsContainer = document.getElementById('hearts-container');
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = '✨';
            heart.style.left = (rect.left + rect.width/2) + 'px';
            heart.style.top = (rect.top + rect.height/2) + 'px';
            heart.style.position = 'fixed';
            heart.style.fontSize = '1rem';
            heart.style.animation = 'float-up 1.5s ease-out forwards';
            
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 1500);
        }, i * 100);
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextPage();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevPage();
    }
});

// Add some cute console messages
console.log('🌸 Halo! Website ini dibuat dengan penuh cinta dan rasa malu hehe~ 💕');
console.log('✨ Semoga dia mau main Roblox bareng ya! 🎮');
console.log('💖 Made with love & shyness 💖');

// Tambah device fingerprinting
function getDeviceFingerprint() {
    return btoa(navigator.userAgent + screen.width + screen.height);
}

// Tambah IP tracking via API
async function getClientIP() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
}