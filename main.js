// Get references to elements
const inputTitle = document.getElementById("title")
const inputTitleColor = document.getElementById("tcolor")
const inputMessage = document.getElementById("mess")
const inputMessageColor = document.getElementById("message-color")

const displayTitle = document.getElementById("title-display")
const displayMessage = document.getElementById("message-display")

// Functions 

function handleTitle() {
    let title = inputTitle.value

    displayTitle.innerHTML = title
}

function handleMessage() {
    let message = inputMessage.value

    displayMessage.innerHTML = message
}

function handleTitleColor() {
    let tColor = inputTitleColor.value
    
    displayTitle.style.color = tColor
}

function handleMessageColor() {
    let mColor = inputMessageColor.value

    displayMessage.style.color = mColor
}
// Event handlers
inputTitle.addEventListener('change', function(e) {
    handleTitle()
})

inputTitleColor.addEventListener('change', function(e) {
    handleTitleColor()
})

inputMessage.addEventListener('change', function(e) {
    handleMessage()
})

inputMessageColor.addEventListener('change', function(e) {
    handleMessageColor()
})

