const input = document.getElementById('input');
const p = document.getElementById('p');

input.addEventListener('input', updateValue);

function updateValue(e) {
    p.textContent = e.target.value;
}