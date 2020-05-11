
const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true)
request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach(property => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h1')
            h1.textContent = property.property_type

            const h2 = document.createElement('h2')
            h2.textContent = property.name


            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(h1)

        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}

request.send()