document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img.lazy-load");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => {
          img.classList.add("loaded");
        };
        observer.unobserve(img);
      }
    });
  });
  lazyImages.forEach((img) => {
    imageObserver.observe(img);
  });
});

// Asynchronous loading of non-essential scripts
function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.onload = callback || function () {};
  document.head.appendChild(script);
}
loadScript("https://example.com/analytics.js");
