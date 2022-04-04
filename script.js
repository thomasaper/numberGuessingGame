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

    // in dieser Variable wird die gegenwärtige Schätzung des Spielers gespeichert. Der Wert wird durch number() 
    //geschickt, um sicher zu gehen, dass es definitiv eine Zahl ist.
   let userGuess = Number(guessField.value);

   // Es wird getestet ob der Wert der guessCount Variable 1 ist. Wenn ja wird der Inhalt vom Paragraph gleich sein.
   if (guessCount === 1) {
       guesses.textContent += 'Previous guesses: ';
   } 
    // der Wert der Variable userGuess wird an das Ende des guesses Paragraph gesetz. 
    //Es wird ein Leerzeichen da zwischen hinzugefügt.
guesses.textContent += userGuess + '';

// Das erste if überprüft, ob die Schätzung gleich der Zufallsnummer ist und wenn ja gibt eine 
// Glückwunsch Nachricht in grün raus. Löscht den Content von Low/Hight und startet die setGameOver() Funktion.
if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
// Das else if überprüft, ob diese Schätzung die letzte ist und gibt nach der letzten Runde wenn ja eine GameOver oder Congratulations Nachricht raus.   
} else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
// der else Code Block wird ausgeführt, wenn beide andren Codeblocks nicht ausgeführt werden. Es sind Schätzungen über und die letzte Schätzung war falsch. 
// Es wird getestet, ob die Schätzung zu hoch / niedrig war und diese NAchricht wird angezeigt.
} else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
    }
}

// Die letzten drei Zeilen bereiten eine neue Runde vor. Es wird 1 zum Schätzungszähler hinzugefügt und der 
// Inhalt des Inputfeld wird gelöscht und neu fokussiert.
guessCount++;
guessField.value = '';
guessField.focus();

}

// Nun haben wir eine checkguess() Funktion, diese wurde jedoch noch nicht aufgerufen. Wir rufen die Funktion mit
// einem event auf. Event listener observieren bestimmte Events und event handler führen den Code aus.

// Hier wird ein event listener 'click' zum guessSubmit button hinzugefügt. Bemerke dass die checkGuess() Funktion in
// den Anführungszeichen keine Klammern benötigt.
guessSubmit.addEventListener('click', checkGuess);

// Nun fügen wir noch die setGameOver() Funktion hinzu, die ausgeführt werden soll, sobald das Spiel zu Ende ist.

function setGameOver() {
    // die ersten beiden Zeilen setzen die disabled Eigenschaft des form text input und buttons auf true, damit der 
    // Spieler keine Schätzungen mehr übermitteln kann.
    guessField.disabled = true;
    guessSubmit.disabled = true;
    // Die nächsten drei Zeilen erstellen einen neunen <button>  mit dem label "Start new game" 
    // und fügt ihn am Ende der html hinzu
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    // Die letzte Linie fügt einen Event Listener 'click' dem neuem Button hinzu und startet die Funktion resetGame()
    resetButton.addEventListener('click', resetGame);
}

// Nun muss noch die resetGame() Funktion definiert werden. Der folgende lnage Block startet das Spiel einmal
// komplett neu, damit der Spieler eine neue Runde spielen kann.

function resetGame() {
    // Der guessCount wird zurück auf 1 gesetzt.
    guessCount = 1;

    // Alle Inhalte der Info-Paragraphen werden gelöscht. Alle <p> im <div class='resultParas"></div> werden 
    // nacheinander angesprochen und der textContent wird zu '' gesetzt (Ein leerer String).
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetParas of resetParas) {
        resetParas.textContent = '';
    }

    // entfernt den reset Button von unserem Code
resetButton.parentNode.removeChild(resetButton);

// aktiviert die Formularfelder und leert sowie fokussiert das text field. Es ist bereit für eine neue Eingabe.
guessField.disabled = false;
guessSubmit.disabled = false;
guessField.value = '';
guessField.focus();

// Entfernt die Hintergrundfarbe des lastResult Paragraphen.
lastResult.style.backgroundColor = 'white';

// Generiert eine neue zufällige Nummer für das Ratespiel.
randomNumber = Math.floor(Math.random() * 100) + 1:

}