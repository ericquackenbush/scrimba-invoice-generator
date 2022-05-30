const services = {
    washCar: {
        name: "Wash Car",
        price: 10,
        requested: false
    },
    mowLawn: {
        name: "Mow Lawn",
        price: 20,
        requested: false
    },
    pullWeeds: {
        name: "Pull Weeds",
        price: 30,
        requested: false
    }
}

const btnContainer = document.querySelector('#btn-container')
const requestedServices = document.querySelector('#requested-services')
const totalAmount = document.querySelector("#total-amount")

// display buttons to add/remove a service
Object.keys(services).forEach(e => {
    const btn = document.createElement("button")
    btn.innerText = services[e].name
    btn.addEventListener("click", function() {
        services[e].requested = !services[e].requested
        btn.style.border = (services[e].requested) ? "solid red" : ""
        // call function to update display
        updateRequestedServices()
        // call function to update total
        updateTotalAmount()
    })
    btnContainer.appendChild(btn)
}) 

function updateRequestedServices() {
    requestedServices.innerHTML = ''
    Object.keys(services).forEach(e => {
        if (services[e].requested === true) {
            requestedServices.innerHTML += `<p>${services[e].name} \$${services[e].price}</p>`
        }
    }) 
}

function updateTotalAmount() {
    let currentTotal = 0
    Object.keys(services).forEach(e => {
        if (services[e].requested === true) {
            currentTotal += services[e].price
        }
    })
    totalAmount.innerHTML = `Total: \$${currentTotal}` 
}