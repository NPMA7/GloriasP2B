document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".slide-left");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log("Element: ", entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          console.log("Added active class");
        } else {
          entry.target.classList.remove("active");
          console.log("Removed active class");
        }
      });
    },
    { threshold: 0.1 }
  );

  images.forEach((image) => {
    observer.observe(image);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
          console.log("Removed active class");
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });
});

document.getElementById("hamburger").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
