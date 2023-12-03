
let firstCard = 10
let secondCard = 12
let sum = firstCard + secondCard
let message = ""

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#card-el");

function startGame() {
    renderGame();
}

function renderGame() {
    cardEl.innerText = "Cards: " + firstCard + " " + secondCard;
    sumEl.innerText = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
    } else if (sum > 21) {
        message = "You're out of the game! "
    }

    messageEl.innerText = message;
}

function newCard() {
    let thirdCard = 7;
    sum += thirdCard;
    renderGame()
}