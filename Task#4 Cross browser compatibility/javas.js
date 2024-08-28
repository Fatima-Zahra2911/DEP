document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".cta a");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.classList.toggle("nav-active");
  });
});
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
