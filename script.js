"use strict"
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myLeads"))
})

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) 
console.log(leadsFromLocalStorage)

function renderLeads() {
    let listItems = ""
    for (let i=0; i < myLeads.length; i++) {
        listItems += 
        `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]} 
                </a>            
            </li>
        `
        
    }
    ulEl.innerHTML = listItems
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

/////////////////// Template strings ///////////////////
// const recipient = "James"
// const sender = "Bilal MB"

// let email = `Hey ${recipient}! How is it going? Cheers, ${sender}`

// console.log(email)

/////////////////// localStorage() ///////////////////
// localStorage.setItem("MyFirstLead", "www.bilal.com")
// console.log(localStorage.getItem(MyFirstLead))
// localStorage.clear()

/////////////////// Using JSON.parse and JSON.stringify ///////////////////
// let myLeads = `["www.123.com"]`

// myLeads = JSON.parse(myLeads)
// myLeads.push("www.456.com")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)