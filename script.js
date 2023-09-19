let randomNumber = 0

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 20)+1;
}

generateRandomNumber()

function checkBTN() {
    document.getElementById("btnAgain").addEventListener("click", clear)
    document.getElementById("btnCheck").addEventListener("click", check)
}

checkBTN()

function clear() {
    document.getElementById("inputNumber").value
    document.getElementById("score");
    document.getElementById("highScore");
}

function check() {
let inputNumber = document.getElementById("inputNumber").value;
let score = document.getElementById("score");
let highscore = document.getElementById("highScore");
    if (inputNumber == randomNumber) {
        document.getElementById("message").innerHTML = "Right!"
        if (highscore.innerHTML < score.innerHTML){
            highscore.innerHTML += 1;
        }
    } else {
        document.getElementById("message").innerHTML = "Wrong!"
        score.innerHTML -= 1
        if (score.innerHTML <= 0) {
            startOver()
        }
    }
}

// Make a function where the user can start over again with 20 points and a new random number
function startOver() {
    generateRandomNumber()
    document.getElementById("message").innerHTML = "New game! Start guessing..."
    document.getElementById("score").innerHTML = 20;
    document.getElementById("inputNumber").value = "";
}




