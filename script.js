const words = ["JAVASCRIPT", "PYTHON", "HTML", "CSS", "CODIGO"];
let word = words[Math.floor(Math.random() * words.length)];
let displayWord = "_".repeat(word.length).split("");
let attemptsLeft = 6;
let guessedLetters = [];

document.getElementById("displayWord").textContent = displayWord.join(" ");
document.getElementById("attempts").textContent = attemptsLeft;

function guessLetter() {
    const letterInput = document.getElementById("letterInput");
    let letter = letterInput.value.toUpperCase();

    if (letter && !guessedLetters.includes(letter)) {
        guessedLetters.push(letter);

        if (word.includes(letter)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    displayWord[i] = letter;
                }
            }
            document.getElementById("displayWord").textContent = displayWord.join(" ");
        } else {
            attemptsLeft--;
            document.getElementById("attempts").textContent = attemptsLeft;
        }

        if (!displayWord.includes("_")) {
            document.getElementById("message").textContent = "¡Ganaste! La palabra era " + word;
        } else if (attemptsLeft === 0) {
            document.getElementById("message").textContent = "Perdiste. Estas ahorcado,la palabra es "  + word;
        }

        letterInput.value = "";
    }
}
