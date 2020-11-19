const message = document.getElementById('message');
const inputMessage = document.getElementById('inputMessage');
const button = document.querySelector('#messageButton');

button.addEventListener('click', (event) => {
    message.innerText = inputMessage.value
})

let colorLookup = {
    button1: 'crimson',
    button2: 'orangered',
    button3: '#ffff00',
    button4: 'lime',
    button5: 'rgb(72,72,199)'
}

let backgroundButtons = document.querySelectorAll('.backgroundButton')

