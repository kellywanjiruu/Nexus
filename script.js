// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Active Navigation Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Scroll Animation
const animateElements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  },
);

animateElements.forEach((element) => {
  observer.observe(element);
});

// Pricing Toggle (Monthly/Yearly)
const pricingToggle = document.getElementById("pricingToggle");
const prices = document.querySelectorAll(".amount");

pricingToggle.addEventListener("change", (e) => {
  const isYearly = e.target.checked;

  prices.forEach((price) => {
    const monthlyPrice = price.getAttribute("data-monthly");
    const yearlyPrice = price.getAttribute("data-yearly");

    if (isYearly) {
      price.textContent = yearlyPrice;
    } else {
      price.textContent = monthlyPrice;
    }
  });

  // Update period text
  const periods = document.querySelectorAll(".period");
  periods.forEach((period) => {
    period.textContent = isYearly ? "/year" : "/month";
  });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Contact Form Submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Show success message (in production, this would send to server)
  alert("Thank you for your message! We'll get back to you soon.");
  contactForm.reset();
});

// Navbar Background Change on Scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "var(--shadow-md)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.9)";
    navbar.style.boxShadow = "none";
  }
});

// Newsletter Form
const newsletterForm = document.querySelector(".newsletter");
const newsletterInput = newsletterForm.querySelector("input");
const newsletterBtn = newsletterForm.querySelector("button");

newsletterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (newsletterInput.value.trim()) {
    alert(`Thanks for subscribing with: ${newsletterInput.value}`);
    newsletterInput.value = "";
  } else {
    alert("Please enter your email address");
  }
});

// Counter Animation for Stats
const stats = document.querySelectorAll(".stat-number");

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValue = parseInt(target.textContent);
        let currentValue = 0;
        const increment = targetValue / 50;

        const updateCounter = () => {
          if (currentValue < targetValue) {
            currentValue += increment;
            target.textContent =
              Math.ceil(currentValue) +
              (target.textContent.includes("K") ? "K" : "") +
              (target.textContent.includes("+") ? "+" : "");
            requestAnimationFrame(updateCounter);
          } else {
            target.textContent = target.textContent.includes("K")
              ? targetValue + "K"
              : targetValue + (target.textContent.includes("+") ? "+" : "");
          }
        };

        updateCounter();
        statsObserver.unobserve(target);
      }
    });
  },
  { threshold: 0.5 },
);

stats.forEach((stat) => statsObserver.observe(stat));

// Add hover effects to feature cards
const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Floating cards animation
const floatingCards = document.querySelectorAll(".floating-card");

floatingCards.forEach((card) => {
  card.style.animation = "float 3s ease-in-out infinite";
});

// Parallax effect on hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector(".image-wrapper");

  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

// Preloader animation (optional)
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
