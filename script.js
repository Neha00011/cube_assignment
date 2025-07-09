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

// Subscription Card Navigation
document.addEventListener("DOMContentLoaded", () => {
  const subscriptionOptions = document.querySelectorAll(".subscription-option");

  // Function to show specific subscription card
  function showSubscriptionOption(targetSubscription) {
    subscriptionOptions.forEach((option) => {
      option.style.display = "none";
      option.classList.remove("active");
    });

    const targetOption = document.getElementById(
      targetSubscription + "-subscription"
    );
    if (targetOption) {
      targetOption.style.display = "block";
      targetOption.classList.add("active");
    }
  }

  // Initialize with single subscription visible
  showSubscriptionOption("single");

  // Handle clicks on "Double Subscription" and "Try Once" option rows in single subscription card
  const optionRows = document.querySelectorAll(
    ".single-subscription-box .option-row"
  );
  optionRows.forEach((optionRow) => {
    optionRow.addEventListener("click", function () {
      const span = this.querySelector("span");
      if (span) {
        const text = span.textContent;

        if (text.includes("Double Subscription")) {
          showSubscriptionOption("double");
        } else if (text.includes("Try Once")) {
          showSubscriptionOption("try-once");
        }
      }
    });
  });

  // Handle back to single subscription buttons
  const backButtons = document.querySelectorAll(".back-to-single-btn");
  backButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showSubscriptionOption("single");
    });
  });
});
