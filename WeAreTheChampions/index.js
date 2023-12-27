import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


//Firebase Setup
const appSettings = {
    databaseURL: "https://champions-1eb59-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementListInDB = ref(database, "endorsementList")

const inputField = document.getElementById("endorsement");
const btnEl = document.getElementById("btn");
const endorsementList = document.getElementById("Endorsements-list");

btnEl.addEventListener("click", function () {
    let inputValue = inputField.value
    push(endorsementListInDB, inputValue)
    console.log(inputValue)
    clearInputField()
})
onValue(endorsementListInDB, function (snapshot) {

    if (snapshot.exists()) {
        let list = Object.entries(snapshot.val())

        clearEndorsementList()
        for (let i = 0; i < list.length; i++) {

            let currentList = list[i];
            let Id = currentList[0];
            let valueData = currentList[1];

            appendItemEndorsementList(currentList)
        }
    } else {
        endorsementList.innerHTML = "<h1>No items here... yet</h1>";
    }


})

function clearEndorsementList() {
    endorsementList.innerHTML = ""
}

function clearInputField() {
    inputField.value = ""
}

function appendItemEndorsementList(item) {
    let itemId = item[0]
    let itemD = item[1]
    let newLi = document.createElement("li")
    newLi.textContent = itemD

    newLi.addEventListener("dblclick", function () {
        let exactLocationInDB = ref(database, `endorsementList/${itemId}`)
        remove(exactLocationInDB)
    })
    endorsementList.append(newLi)
}

