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

  // Appointment Button Redirect
  const appointmentBtn = document.querySelector(".appointment-btn");
  if (appointmentBtn) {
    appointmentBtn.addEventListener("click", () => {
      window.location.href = "../Appointment/appointment.html";
    });
  }

  // Services Tab Item Toggle
  const tabItems = document.querySelectorAll(".service-tab-box .tab-item:not(.view-all)");
  tabItems.forEach((item) => {
    item.addEventListener("click", () => {
      tabItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Specialty Hover Effect
  const specialtyItems = document.querySelectorAll(".specialty-item");
  specialtyItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("active");
    });
    item.addEventListener("mouseleave", () => {
      item.classList.remove("active");
    });
  });

  // Contact Card Hover Effect
  const contactCards = document.querySelectorAll(".contact-card");
  contactCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("dark");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("dark");
    });
  });

  // Carousel Setup Function
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
        dot.classList.toggle("active", dotIndex === currentIndex);
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

  // Initialize Carousels
  setupCarousel(".news-carousel-inner", ".news-slide", ".news-dots .dot", 5000);
  setupCarousel(".doctors-carousel-inner", ".doctors-slide", ".doctors-dots .dot", 6000);

  const appointmentForm = document.querySelector('.appointment-form');

  appointmentForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = appointmentForm.querySelector('input[placeholder="Name"]').value;
    const gender = appointmentForm.querySelector('select').value; // Get value from the first select (gender)
    const email = appointmentForm.querySelector('input[type="email"]').value;
    const phone = appointmentForm.querySelector('input[placeholder="Phone"]').value;
    const date = appointmentForm.querySelector('input[type="date"]').value;
    const time = appointmentForm.querySelector('input[type="time"]').value;
    // Corrected way to select specific selects if they don't have unique attributes
    const selects = appointmentForm.querySelectorAll('select');
    const doctor = selects[1] ? selects[1].value : ''; // Get value from the second select (doctor)
    const department = selects[2] ? selects[2].value : ''; // Get value from the third select (department)
    const message = appointmentForm.querySelector('textarea[placeholder="Message"]').value;

    // Simple validation (can be expanded)
    if (!name || !gender || !email || !phone || !date || !time || !doctor || !department) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // In a real application, you would send this data to a server
    console.log('Appointment Form Submitted:');
    console.log('Name:', name);
    console.log('Gender:', gender);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Doctor:', doctor);
    console.log('Department:', department);
    console.log('Message:', message);

    alert('Thank you for booking your appointment! (Form submission is simulated)');
    appointmentForm.reset(); // Clear the form after successful "submission"
  });

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Handle date and time input focus/blur for placeholder effect (if needed)
  const dateInput = appointmentForm.querySelector('input[type="text"][placeholder="Date"]');
  const timeInput = appointmentForm.querySelector('input[type="text"][placeholder="Time"]');

  if (dateInput) {
    dateInput.addEventListener('focus', function () { this.type = 'date'; });
    dateInput.addEventListener('blur', function () { if (!this.value) this.type = 'text'; });
  }

  if (timeInput) {
    timeInput.addEventListener('focus', function () { this.type = 'time'; });
    timeInput.addEventListener('blur', function () { if (!this.value) this.type = 'text'; });
  }

});

document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".doctors-carousel-inner");
  const slides = document.querySelectorAll(".doctors-slide");
  const dots = document.querySelectorAll(".doctors-dots .dot");
  let currentSlide = 0;

  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    currentSlide = index;

    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === currentSlide)
    );
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
    });
  });

  showSlide(0);
  setInterval(() => showSlide(currentSlide + 1), 6000);
});
    