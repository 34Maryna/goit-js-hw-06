const refs = {
    input: document.querySelector ('#font-size-control'),
    text: document.querySelector('#text'),
};
handleInput();
refs.input.addEventListener('input', handleInput);

function handleInput() {
    refs.text.style.fontSize = `${refs.input.value}px`;
};