// errechnet eine Nummer zwischen 1-100 mit Hilfe eines mathematischen Algorhytmus
let randomNumber = Math.floor(Math.random() * 100) +1;  

// beinhalten eine Referenz zu den HTML Resultat Paragraphen. Hier werden später Variablen den p-tags übergeben.
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

// beinhalten eine Referenz zum text input und submit button. Diese werden genutzt, um das Raten zu senden.
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

// hier wird gepeichert, wie oft der Spieler geraten hat.
let guessCount = 1;

// beinhaltet eine Referenz zum Reset Button zum Neustart des Spiels
let resetButton;

function checkGuess() {
   let userGuess = Number(guessField.value);
   if (guessCount === 1) {
       guesses.textContent += 'Previous guesses: ';
   } 
guesses.textContent += userGuess + '';

if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
} else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
} else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
    }
}

guessCount++;
guessField.value = '';
guessField.focus();

}