window.onscroll = function () {
  const button = document.getElementById("scrollButton");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

function upScroll() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
