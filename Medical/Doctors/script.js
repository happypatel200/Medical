document.addEventListener("DOMContentLoaded", function () {

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

  const contactCards = document.querySelectorAll(".contact-card");
  contactCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("dark");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("dark");
    });
  });

  const setupCarousel = (carouselSelector, slideSelector, dotSelector, intervalTime) => {
    const carouselInner = document.querySelector(carouselSelector);
    const slides = document.querySelectorAll(slideSelector);
    const dots = document.querySelectorAll(dotSelector);

    let currentIndex = 0;
    let autoSlideInterval;

    const showSlide = (index) => {
      if (index >= slides.length) {
        index = 0;
      } else if (index < 0) {
        index = slides.length - 1;
      }

      currentIndex = index;
      const offset = -currentIndex * 100;
      carouselInner.style.transform = `translateX(${offset}%)`;

      dots.forEach((dot, dotIndex) => {
        if (dotIndex === currentIndex) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    };

    const startAutoSlide = () => {
      autoSlideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
      }, intervalTime);
    };

    const stopAutoSlide = () => {
      clearInterval(autoSlideInterval);
    };

    dots.forEach((dot) => {
      dot.addEventListener("click", (event) => {
        stopAutoSlide();
        const slideIndex = parseInt(event.target.dataset.slideIndex);
        showSlide(slideIndex);
        startAutoSlide();
      });
    });

    showSlide(currentIndex);
    startAutoSlide();
  };

  setupCarousel(".news-carousel-inner", ".news-slide", ".news-dots .dot", 5000);
});


document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");

  function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 5000); // Change slide every 4 seconds
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      slideIndex = parseInt(dot.dataset.slideIndex);
      updateSlide();
    });
  });

  function updateSlide() {
    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
  }

  showSlides(); // Start auto slide
});
