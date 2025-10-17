/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEl = document.getElementById("length-desc")
const volumeEl = document.getElementById("volume-desc")
const massEl = document.getElementById("mass-desc")
const inputEl = document.getElementById("user-input")
const inputBtn = document.getElementById("convert-btn")

inputBtn.addEventListener("click", function() {
    const input = inputEl.value
    
    const metreToFeet = (input * 3.281).toFixed(3)
    const feetToMetre = (input / 3.281).toFixed(3)
    const litreToGallon = (input * 0.264).toFixed(3)
    const gallonToLitre = (input / 0.264).toFixed(3)
    const kilogramToPound = (input * 2.204).toFixed(3)
    const poundToKilogram = (input / 2.204).toFixed(3)
    
    lengthEl.textContent = `${input} metres = ${metreToFeet} feet | ${input} feet = ${feetToMetre} metres`
    volumeEl.textContent = `${input} litres = ${litreToGallon} gallons | ${input} gallons = ${gallonToLitre} litres`
    massEl.textContent = `${input} kilos = ${kilogramToPound} pounds | ${input} pounds = ${poundToKilogram} kilos`
})