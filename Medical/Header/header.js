const openBtn = document.getElementById('openMobileMenu');
const closeBtn = document.getElementById('closeMobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

// Function to open the mobile menu
openBtn.addEventListener('click', () => {
    mobileOverlay.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when menu is open
});

// Function to close the mobile menu
closeBtn.addEventListener('click', () => {
    mobileOverlay.classList.remove('show');
    document.body.style.overflow = ''; // Restore body scrolling
});

// Optional: Close menu when a navigation link is clicked inside the overlay
document.querySelectorAll('.mobile-overlay-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileOverlay.classList.remove('show');
        document.body.style.overflow = '';
    });
});
// Optional: Close menu when the Appointment button in overlay is clicked
document.querySelector('.btn-appointment-overlay').addEventListener('click', () => {
    mobileOverlay.classList.remove('show');
    document.body.style.overflow = '';
});