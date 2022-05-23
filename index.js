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

Object.keys(services).forEach(e => {
    const btn = document.createElement("button")
    btn.innerText = services[e].name
    btn.addEventListener("click", function() {
        services[e].requested = !services[e].requested
        btn.style.border = (services[e].requested) ? "solid red" : ""
    })
    btnContainer.appendChild(btn)
}) 