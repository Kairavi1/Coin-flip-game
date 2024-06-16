// script.js

function flipCoin() {
    const coin = document.getElementById('coin');
    const resultText = document.getElementById('result');

    // Disable button during animation
    const button = document.querySelector('button');
    button.disabled = true;

    // Generate a random number (0 or 1)
    const random = Math.floor(Math.random() * 2);

    // Rotate the coin based on random result
    coin.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
        coin.style.transform = 'rotateY(0)';
        // Enable button after animation
        button.disabled = false;
    }, 1000);

    // Show result text after animation
    setTimeout(() => {
        resultText.style.opacity = 1;
        resultText.textContent = random === 0 ? 'Heads' : 'Tails';
    }, 1000);
}
