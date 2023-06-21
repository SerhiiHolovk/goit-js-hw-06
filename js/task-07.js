const sizeValue = document.getElementById('font-size-control');
const sizeFont = document.getElementById('text');

sizeValue.addEventListener('input', () => {
    sizeFont.style.fontSize = `${sizeValue.value}px`;
})
