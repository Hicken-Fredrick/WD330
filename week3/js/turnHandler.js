function addCard() {
    let newCard = document.createElement("img")
    newCard.src = cardDeck[0].cardImg
    document.getElementById("opponentArea").appendChild(newCard)
}