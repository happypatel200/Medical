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

  // ========== Card Selection ==========
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
    });
  });

});
