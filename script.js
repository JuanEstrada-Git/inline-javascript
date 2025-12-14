const button = document.getElementById('rewrite');
const output = document.getElementById('output');

button.addEventListener('click', () => {
    output.innerText = "Replaced dawg!";
    console.log('Replaced dawg!');
});
