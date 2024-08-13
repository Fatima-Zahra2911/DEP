alert("Welcome to my clone website of Amazon");
let index = 0;

function slideShow() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

function next() {
  index = (index + 1) % document.querySelectorAll(".slide").length;
  slideShow();
}

function previous() {
  index =
    (index - 1 + document.querySelectorAll(".slide").length) %
    document.querySelectorAll(".slide").length;
  slideShow();
}

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

const container = document.querySelector("body");
const range = document.querySelector("#range");
range.addEventListener("change", () => {
  container.style.filter = "brightness(" + range.value + "%)";
});

function togglePopup(popupId, button) {
  const popup = document.getElementById(popupId);
  popup.classList.toggle("active");
  if (popup.classList.contains("active")) {
    button.innerText = "See less";
  } else {
    button.innerText = "See more";
  }
}
document
  .querySelectorAll(".popup .close-btn, .popup #close")
  .forEach((button) => {
    button.addEventListener("click", function () {
      const popup = button.closest(".popup");
      popup.classList.remove("active");
      const toggleButton = document.querySelector(
        `button[onclick*="${popup.id}"]`
      );
      if (toggleButton) {
        toggleButton.innerText = "See more";
      }
    });
  });
