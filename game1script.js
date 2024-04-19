const targetNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    const resultMessage = document.getElementById('result');

    if (userGuess == targetNumber) {
        resultMessage.innerText = 'Congratulations! You guessed the correct number!';
    } else {
        resultMessage.innerText = 'Sorry, try again!';
        resultMessage.classList.add('shake');

       setTimeout(() => {
            resultMessage.classList.remove('shake');
        }, 500);
    }
}
