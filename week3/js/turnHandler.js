function deal() {
    //first 2 for dealer second 2 for player
    let newCards = [];
    for (i = 0; i < 4; i++) {
        newCards[i] = Math.floor(Math.random() * 52);
    }

    //put cards down slowly on dealer zone
    for (i = 0; i < 2; i++) {
        let newCard = document.createElement("img")
        newCard.src = cardDeck[newCards[i]].cardImg
        setTimeout(() => document.getElementById("opponentArea").appendChild(newCard), 1000 * i)
    }

    //put cards down slowly on player zone
    for (i = 2; i < 4; i++) {
        let newCard = document.createElement("img")
        newCard.src = cardDeck[newCards[i]].cardImg
        setTimeout(() => document.getElementById("playerArea").appendChild(newCard), 1000 * i)
    }
}