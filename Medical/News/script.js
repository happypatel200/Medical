// ========== Mobile Menu Toggle ==========
document.addEventListener("DOMContentLoaded", function () {
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

  // ========== Contact Card Hover Effect ==========
  const contactCards = document.querySelectorAll(".contact-card");
  contactCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("dark");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("dark");
    });
  });

  // ========== Blog Pagination ==========
  const postsPerPage = 2;
  const posts = Array.from(document.querySelectorAll(".blog-card"));
  const totalPages = Math.ceil(posts.length / postsPerPage);
  let currentPage = 1;

  function showPage(page) {
    currentPage = page;

    posts.forEach((post, index) => {
      post.style.display =
        index >= (page - 1) * postsPerPage && index < page * postsPerPage
          ? "block"
          : "none";
    });

    document.querySelectorAll(".page-number").forEach((btn) => {
      btn.classList.remove("active");
      if (parseInt(btn.dataset.page) === page) {
        btn.classList.add("active");
      }
    });

    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    if (prevBtn && nextBtn) {
      prevBtn.style.visibility = page === 1 ? "hidden" : "visible";
      nextBtn.style.visibility = page === totalPages ? "hidden" : "visible";
    }
  }

  document.querySelectorAll(".page-number").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showPage(parseInt(btn.dataset.page));
    });
  });

  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage > 1) showPage(currentPage - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage < totalPages) showPage(currentPage + 1);
    });
  }

  showPage(currentPage);
});
