/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

//add event listener
convertBtn.addEventListener("click", function(){ 
    let input = document.getElementById("text-box").value
    convertLength(input)
    convertVolume(input)
    convertMass(input)
})
let input = document.getElementById("text-box").value

//make three functions 
//for length 
function convertLength(input){
    let result = input * 3.281
    let result2 = input / 3.281
    lengthEl.textContent = input + " meters = " + result.toFixed(3) + " feet" + " | " + input + " feet = " + result2.toFixed(3) + " meters"
}
//for volume
function convertVolume(input){
    let result = input * 0.264
    let result2 = input / 0.264
    volumeEl.textContent = input + " liters = " + result.toFixed(3) + " gallons" + " | " + input + " gallons = " + result2.toFixed(3) + " liters"
}
//for mass
function convertMass(input){
    let result = input * 2.204
    let result2 = input / 2.204
    massEl.textContent = input + " kilos = " + result.toFixed(3) + " pounds" + " | " + input + " pounds = " + result2.toFixed(3) + " kilos"
}