let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

characters = characters.toString().replace(/,/g, "")

let passwordOneEl = document.getElementById("password-One");
let passwordTwoEl = document.getElementById("password-Two");

let randomOne = "";
let randomTwo = "";
function randomNumberGenerator() {

    let password = 15;
    for (let i = 0; i < password; i++) {
        let char = Math.floor(Math.random() * characters.length + 1)
        randomOne += characters.charAt(char);
    }

    passwordOneEl.textContent = randomOne;


    let passwordTwo = 15;
    for (let i = 0; i < passwordTwo; i++) {
        let char = Math.floor(Math.random() * characters.length + 1)
        randomTwo += characters.charAt(char);
    }
    passwordTwoEl.textContent = randomTwo;
}


function copyPassOne() {
    // Copy the text inside the text field
    navigator.clipboard.writeText(randomOne);

    // Alert the copied text
    alert("Copied the password: " + randomOne);
}


function copyPassTwo() {
    // Copy the text inside the text field
    navigator.clipboard.writeText(randomTwo);

    // Alert the copied text
    alert("Copied the password: " + randomTwo);
}
