const headerToggleBtn = document.querySelector("header__toggle-btn");
const navbar = document.querySelector("navbar");
const headerInner = document.querySelector("header__inner");

headerToggleBtn.addEventListener("click", () => {
  navbar.classList.add("show-nav");
});

headerInner.addEventListener("click", () => {
  navbar.classList.remove("show-nav");
});
