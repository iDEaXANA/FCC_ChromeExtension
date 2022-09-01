"use strict"
let myLeads = ["www.1.com", "www.2.com", "www.3.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i=0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
}


/////////////////// addEventListener ///////////////////
// let myBox = document.getElementById("box-el")
// myBox.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })

/////////////////// const Vs let ///////////////////

// const basePrice = 520 // Changes to const
// const discount = 120  // Changes to const
// let shippingCost = 12
// let shippingTime = "5-12 days"

// shippingCost = 15
// shippingTime = "7-14 days"

// const fullPrice = basePrice - discount + shippingCost // Changes to const (as it never changes beyond this point)

// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

/////////////////// innerHTML ///////////////////

// let buyBtn = document.getElementById("buy-btn")
// buyBtn.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy() {
//     buyBtn.innerHTML += "<p>Thank you for buying!</p>"
// }