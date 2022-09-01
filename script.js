"use strict"

let inputButton = document.getElementById("input-btn")
inputButton.addEventListener("click", function() {
    console.log("Button clicked from event listener!")
})

function saveLead() {
    console.log("Button clicked from onclick attribute!")
}
