// ========== DOM Ready ==========
document.addEventListener("DOMContentLoaded", function () {

  // ========== Mobile Menu Toggle ==========
  const openBtn = document.getElementById("openMobileMenu");
  const closeBtn = document.getElementById("closeMobileMenu");
  const mobileOverlay = document.getElementById("mobileOverlay");

  openBtn.addEventListener("click", () => {
    mobileOverlay.classList.add("show");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    mobileOverlay.classList.remove("show");
    document.body.style.overflow = "";
  });

  document.querySelectorAll(".mobile-overlay-nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileOverlay.classList.remove("show");
      document.body.style.overflow = "";
    });
  });

  const appointmentBtn = document.querySelector(".btn-appointment-overlay");
  if (appointmentBtn) {
    appointmentBtn.addEventListener("click", () => {
      mobileOverlay.classList.remove("show");
      document.body.style.overflow = "";
    });
  }

  // ========== Contact Card Hover ==========
  const contactCards = document.querySelectorAll(".contact-card");
  contactCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("dark");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("dark");
    });
  });

  // ========== Doctors Carousel ==========
  const setupCarousel = (carouselSelector, slideSelector, dotSelector, intervalTime) => {
    const carouselInner = document.querySelector(carouselSelector);
    const slides = document.querySelectorAll(slideSelector);
    const dots = document.querySelectorAll(dotSelector);

    let currentIndex = 0;
    let autoSlideInterval;

    const showSlide = (index) => {
      if (index >= slides.length) index = 0;
      if (index < 0) index = slides.length - 1;

      currentIndex = index;
      carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
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
      dot.addEventListener("click", (e) => {
        stopAutoSlide();
        showSlide(parseInt(e.target.dataset.slideIndex));
        startAutoSlide();
      });
    });

    showSlide(currentIndex);
    startAutoSlide();
  };

  setupCarousel(".doctors-carousel-inner", ".doctors-slide", ".doctors-dots .dot", 6000);

  // ========== Service Sidebar Toggle ==========
  const serviceItems = document.querySelectorAll(".service-item");
  serviceItems.forEach((item) => {
    item.addEventListener("click", () => {
      serviceItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });

});
