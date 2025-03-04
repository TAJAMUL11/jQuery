const counter = document.querySelector(".counter");
const target = parseInt(counter.dataset.target);
let start = 0;
const duration = 6500; // Animation duration in milliseconds

function animateCounter() {
  const increment = Math.ceil(target / (duration / 20)); // Approximate 60fps

  function updateCount() {
    if (start < target) {
      start += increment;
      counter.textContent = start;
      requestAnimationFrame(updateCount);
    } else {
      counter.textContent = target; // Ensure final value is accurate
    }
  }

  updateCount();
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  if (isElementInViewport(counter) && !counter.classList.contains("counted")) {
    animateCounter();
    counter.classList.add("counted"); // Prevent re-triggering
  }
}

window.addEventListener("scroll", handleScroll);
handleScroll(); // Check on initial load
