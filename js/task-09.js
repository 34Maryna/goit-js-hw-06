function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  btn: document.querySelector('button.change-color'),
  body: document.querySelector('body'),
  span: document.querySelector('span.color'),
}

refs.btn.addEventListener('click', changeBtn)

function changeBtn() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.style.textContent = getRandomHexColor();
}