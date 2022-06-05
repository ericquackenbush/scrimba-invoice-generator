const btnContainer = document.querySelector('#btn-container')
const requestedServices = document.querySelector('#requested-services')
const totalAmount = document.querySelector("#payment-total")
const resetBtn = document.querySelector("#reset-button")

const services = [
    {
        name: "Wash Car",
        id: "wash-car",
        price: 10,
        requested: false
    },
    {
        name: "Mow Lawn",
        id: "mow-lawn",
        price: 20,
        requested: false
    },
    {
        name: "Pull Weeds",
        id: "pull-weeds",
        price: 30,
        requested: false
    }
]

// display buttons to add/remove a service
services.forEach((elem, index) => {
    const btn = document.createElement("button")
    btn.innerText = elem.name + ": $" + elem.price
    btn.id = elem.id
    btn.addEventListener("click", function() {
        // toggle requested service
        setRequestedService(services, index, !elem.requested)
    })
    btnContainer.appendChild(btn)
})

function setRequestedService(servicesObj, servicesIndex, requestedValue) {
    // toggle the requested value for a service
    servicesObj[servicesIndex].requested = requestedValue
    // update button border appropriately
    const serviceBtn = document.getElementById(servicesObj[servicesIndex].id)
    serviceBtn.style.border = (servicesObj[servicesIndex].requested) ? "2px solid #4A4E74" : ""
    // call function to update display
    updateRequestedServices()
}

function updateRequestedServices() {
    let currentTotal = 0
    let currentServices = ''
    services.forEach(elem => {
        if (elem.requested === true) {
            currentServices += `<div><span>${elem.name}</span></div> <div><span>\$</span><span>${elem.price}</span></div>`
            currentTotal += elem.price
        }
    })
    requestedServices.innerHTML = currentServices
    totalAmount.innerHTML = `\$${currentTotal}`  
}

resetBtn.addEventListener("click", function() {
    services.forEach((elem, index) => {
        setRequestedService(services, index, false)
    })
})