/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const unitInput = document.getElementById("input")
const distance = document.getElementById("length-details")
const volume = document.getElementById("volume-details")
const mass = document.getElementById("mass-details")
const convertBtn = document.getElementById("convert")

const convert = () => {
        distance.textContent = `${unitInput.value} meters = ${(unitInput.value * 3.281).toFixed(3)} feet | ${unitInput.value} feet = ${(unitInput.value / 3.281).toFixed(3)} meters`
        volume.textContent = `${unitInput.value} liters = ${(unitInput.value * 0.264).toFixed(3)} gallons | ${unitInput.value} gallons = ${(unitInput.value / 0.264).toFixed(3)} liters`
        mass.textContent = `${unitInput.value} kilos = ${(unitInput.value * 2.204).toFixed(3)} pounds | ${unitInput.value} pounds = ${(unitInput.value / 2.204).toFixed(3)} kilos`
}

convertBtn.addEventListener("click", () => {
    convertBtn.focus()
    convert()
})