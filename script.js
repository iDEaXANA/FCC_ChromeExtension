"use strict"
let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) 

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) { //leads is a general name. Anything can be passed through to it
    let listItems = ""
    for (let i=0; i < leads.length; i++) {
        listItems += 
        `
            <li>
                <a target='_blank' href='${leads[i]}'>
                ${leads[i]} 
                </a>            
            </li>
        `
        
    }
    ulEl.innerHTML = listItems
}


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})



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

/////////////////// Truthy or falsey? ///////////////////
console.log( Boolean("") ) // false
console.log( Boolean("0") ) // true
console.log( Boolean(100) ) // true
console.log( Boolean(null) ) // false
console.log( Boolean([0]) ) // true
console.log( Boolean(-0) ) // true // 0 is false, hence false.

/////////////////// Passing through paramaters(+Arguments) ///////////////////

function greetUser() {
    console.log("Welcome back, Per Harald Borgen!")
}
greetUser()
//Problem with the function is you want it to greet any user.
//Thus:

function greetUsers(name) {
    console.log("Welcome back, " + name + " !")
}
console.log(greetUsers("Bilal"))

function greetUsers2(greeting) {
    console.log(greeting + " Bilal" + " !")
}
console.log(greetUsers2("Howdy"))

function greetUsers3(greeting, name) {
    console.log(greeting + " " + name + " !")
}
console.log(greetUsers3("Howdy", "Bilal"))