let player = {
    name: "User",
    chips: 200,
    wins: 0,
    losses: 0
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = `${player.name}: $${player.chips} | Wins: ${player.wins} | Losses: ${player.losses}`

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += 100; // Example: Player wins and gets 10 chips
        player.wins++; // Increment wins count
    } else {
        message = "You're out of the game!"
        isAlive = false
        player.chips -= 5; // Example: Player loses and loses 5 chips
        player.losses++; // Increment losses count
    }
    
    // Update player's chips dynamically in the UI
    playerEl.textContent = `${player.name}: $${player.chips} | Wins: ${player.wins} | Losses: ${player.losses}`

    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
