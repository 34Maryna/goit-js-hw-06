const refs = {
    deBtn: document.querySelector('button[data-action="decrement"]'),
    inBtn: document.querySelector('button[data-action="increment"]'),
    spanValue: document.querySelector('#value'),
}
let counterValue = 0;

refs.deBtn.addEventListener('click', () => {
    counterValue = counterValue - 1;
    refs.spanValue.textContent = counterValue;
});
refs.inBtn.addEventListener('click', () => {
    counterValue = counterValue + 1;
    refs.spanValue.textContent = counterValue;
});