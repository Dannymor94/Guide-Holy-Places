export const createMarkerHtmlElement = () => {
  const element = document.createElement("div");
  element.classList.add("marker");
  element.addEventListener("click", console.log);
  return element;
};
