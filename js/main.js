// hiệu ứng thu gọn header khi scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  header.classList.toggle("header-shrink", window.scrollY > 0);
});

// hiệu ứng ảnh hero zoom out khi load trang web
window.addEventListener("load", function () {
  var img = document.querySelector(".zoom-out-img");
  img.classList.add("zoom-out-img");
});

// hiện nút back to top khi người dùng cuộn xuống
window.addEventListener("scroll", () => {
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// khi người dùng bấm nút thì lên đầu trang
document.getElementById("back-to-top-btn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
