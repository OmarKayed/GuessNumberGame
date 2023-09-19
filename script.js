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
    document.getElementById("inputNumber").value = ""
    document.getElementById("score").innerHTML = ""
}

function check() {
let inputNumber = document.getElementById("inputNumber").value;
let score = document.getElementById("score").innerHTML;
    if (inputNumber == randomNumber) {
        document.getElementById("message").innerHTML = "Right!"
    } else {
        document.getElementById("message").innerHTML = "Wrong!"
        score.innerHTML -= 1
    }
}





