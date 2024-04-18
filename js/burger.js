const ACTIVE_CLASS = "active";
const OPEN_CLASS = "open";

export const initBurger = () => {
  const burgerBtn = document.querySelector(".navList__burger");
  const burgerMenu = document.querySelector(".navList__wrap-item");

  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle(ACTIVE_CLASS);
    document.body.classList.toggle(OPEN_CLASS);
  });
};