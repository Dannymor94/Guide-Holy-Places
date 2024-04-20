const ACTIVE_CLASS = "active";
const OPEN_CLASS = "open";

export const initBurger = () => {
  const burgerBtn = document.querySelector(".burger");
  const burgerMenu = document.querySelector(".wrap-burger-menu");

  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle(ACTIVE_CLASS);
    document.body.classList.toggle(OPEN_CLASS);
  });
};
initBurger();