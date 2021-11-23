// Setting things up
let cards = []
let message = ""
let sum = 0
let money = 200
let isAlive = false
let hasBlackJack = false
let userName = prompt("Write your name to play the game.")

// Grabbing the elements which are needed to be played with
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let startBtn = document.getElementById("start-btn")
let userData = document.getElementById("user")
let moneyEl = document.getElementById("money-el")
// In order to get shit done we need to write four functions named: startGame(), renderGame() , newCard() , getRandomNumber()

// This function will generate random numbers between 1 to 13. 
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10) {
        return 10
    } else if(randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}
function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    money -= 10
        moneyEl.textContent ="Chips: " + "$" + money
    renderGame()
}
function reduceMoney() {
        money -= 10;
        moneyEl.textContent ="Chips: " + "$" + money
    gameStarted = false
   
}
        
function renderGame() {
cardsEl.textContent = "Cards:"
for (let i = 0; i < cards.length; i++){
     cardsEl.textContent += cards[i] + " "
}
sumEl.textContent = "Sum: " + sum

//conditional statement to build the logic of the game.
if( sum < 21 ) {
    message = "Do you want to draw another card"
} else if( sum === 21 ) {
    message = "You have got a BlackJack!"
    hasBlackJack = true
} else {
    isAlive = false
    message = "You are out of the game!"
}
messageEl.textContent = message

}
function newCard() {
    if ( isAlive === true && hasBlackJack === false ) {
        let card = getRandomNumber()
        cards.push(card)
        sum = sum + card
        money -= 5
        moneyEl.textContent ="Chips: " + "$" + money
        renderGame()
    }
}

userData.textContent = userName


