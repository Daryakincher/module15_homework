const button = document.querySelector(".button");

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

button.addEventListener("click", () => {
  alert(`Размер экрана: ширина-${screenWidth}px, высота-${screenHeight}px.`);
});