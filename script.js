document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".accordion-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const content = toggle.parentElement.nextElementSibling;
      const isOpen = content.style.display === "block";

      // Close all other accordion contents
      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.style.display = "none";
      });

      // Reset all toggle signs
      document.querySelectorAll(".accordion-toggle").forEach((btn) => {
        btn.textContent = "+";
      });

      // If not already open, open this one
      if (!isOpen) {
        content.style.display = "block";
        toggle.textContent = "−";
      }
    });
  });
});

// testimonial.js
let currentIndex = 0;
const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");
const dots = document.querySelectorAll(".dot");
const cardsPerView = 3;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 20; // includes gap
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentIndex);
  });
}

rightBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - cardsPerView) {
    currentIndex++;
    updateSlider();
  }
});

leftBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    currentIndex = idx;
    updateSlider();
  });
});

window.addEventListener("resize", updateSlider);
window.addEventListener("load", updateSlider);
