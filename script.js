const button = document.getElementById('writeBtn');
const output = document.getElementById('output');

button.addEventListener('click', () => {
    output.innerText = "Hello, this was written safely!"
});

