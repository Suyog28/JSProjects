
const homeEl = document.getElementById("home-score");
let homeScore = 0;

function plusOne() {
    homeScore += 1
    homeEl.innerText = homeScore
}

function plusTwo() {
    homeScore += 2
    homeEl.innerText = homeScore
}
function plusThree() {
    homeScore += 3
    homeEl.innerText = homeScore
}


const guestEl = document.getElementById("guest-score")
let guestScore = 0;

function plusOneGuest() {
    guestScore += 1
    guestEl.innerText = guestScore
}

function plusTwoGuest() {
    guestScore += 2
    guestEl.innerText = guestScore
}
function plusThreeGuest() {
    guestScore += 3
    guestEl.innerText = guestScore
}