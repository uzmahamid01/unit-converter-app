/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// let convertBtn = document.getElementById("convert")
// let lengthEl = document.getElementById("length-el")
// let volumeEl = document.getElementById("volume-el")
// let massEl = document.getElementById("mass-el")
// let input = document.getElementById("text-box").value
// let inputElement = document.getElementById("text-box");


//add event listener
// convertBtn.addEventListener("click", function(){ 
//     let input = document.getElementById("text-box").value
//     convertLength(input)
//     convertVolume(input)
//     convertMass(input)
//     inputElement.value = "";
// })

// //make three functions 
// //for length 
// function convertLength(input){
//     let result = input * 3.281
//     let result2 = input / 3.281
//     // lengthEl.textContent = input + " meters = " + result.toFixed(3) + " feet" + " | " + input + " feet = " + result2.toFixed(3) + " meters"
//     lengthEl.textContent = `${input} meters = ${result.toFixed(3)} feet | ${input} feet = ${result2.toFixed(3)} meters`;

// }
// //for volume
// function convertVolume(input){
//     let result = input * 0.264
//     let result2 = input / 0.264
//     // volumeEl.textContent = input + " liters = " + result.toFixed(3) + " gallons" + " | " + input + " gallons = " + result2.toFixed(3) + " liters"
//     volumeEl.textContent = `${input} liters = ${result.toFixed(3)} gallons | ${input} gallons = ${result2.toFixed(3)} liters`;

// }
// //for mass
// function convertMass(input){
//     let result = input * 2.204
//     let result2 = input / 2.204
//     // massEl.textContent = input + " kilos = " + result.toFixed(3) + " pounds" + " | " + input + " pounds = " + result2.toFixed(3) + " kilos"
//     massEl.textContent = `${input} kilos = ${result.toFixed(3)} pounds | ${input} pounds = ${result2.toFixed(3)} kilos`;

// }


//lets refactor the code
let convertBtn = document.getElementById("convert")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let inputElement = document.getElementById("text-box");


//make the conversion object
let conversion = {
    length: 3.281,
    volume: 0.264,
    mass: 2.204 
};

convertBtn.addEventListener("click", function() { 
    const input = parseFloat(inputElement.value); 
        if (!isNaN(input)) {
            convertAndDisplay(input, 'length', lengthEl, "meters", "feet")
            convertAndDisplay(input, 'volume', volumeEl, "liters", "gallons")
            convertAndDisplay(input, 'mass', massEl, "kilos", "pounds")
        }
        inputElement.value = ""

})

function convertAndDisplay(input, type, element, unit1, unit2) {
    const factor = conversion[type];
    const result = input * factor;
    const result2 = input / factor;
    element.textContent = `${input} ${unit1} = ${result.toFixed(3)} ${unit2} | ${input} ${unit2} = ${result2.toFixed(3)} ${unit1}`;
}