
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  header.classList.toggle("header-shrink", window.scrollY > 0);
});

window.addEventListener("load", function () {
  var img = document.querySelector(".zoom-out-img");
  img.classList.add("zoom-out-img");
});