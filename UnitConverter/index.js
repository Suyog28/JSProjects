// 20 * 3.281 - Feet
// 20/3.281 - Meter
// 20/ 3.785 - gallons
// 20 * 3.785 - Liters
// 20 * 2.205 - Pound
// 20 / 2.205 - killos




const btn = document.querySelector("button")
const feetEl = document.getElementById("feets");
const LitersEl = document.getElementById("Liters");
const PoundsEl = document.getElementById("Pounds");




function unitCovertor() {
    let n = parseInt(document.getElementById("inputText").value)
    //Feet and Meters Conversion

    let feet = n * 3.281
    let Meters = n / 3.281
    feetEl.innerHTML = `
    <p class="subHeading">Length(Meter/Feet)</p>
    <p class="subtext">
              ${n} meters = ${feet} feet | ${n} feet = ${Meters.toFixed(3)} meters </p>`


    //Gallons and litters

    let Gallons = n / 3.785
    let Liters = n * 3.785
    LitersEl.innerHTML =
        `  <p class="subHeading">Volume (Liters/Gallons)</p>
            <p class="subtext">
              ${n} liters = ${Gallons.toFixed(3)} gallons |  ${n} gallons = ${Liters} liters
            </p>`
    //Pound and Killos

    let Pound = n * 2.205


    let Killos = n / 2.205


    PoundsEl.innerHTML =
        `  <p class="subHeading">Mass (Kilograms/Pounds)</p>
            <p class="subtext">
              ${n} kilos = ${Pound} pounds | ${n} pounds = ${Killos.toFixed(3)} kilos
            </p>`

}


btn.addEventListener("click", unitCovertor)
