function deal() {
    //setup total to us for hand value
    let total = 0;
    //put cards down slowly on dealer zone & set dealer hand value
    for (i = 0; i < 2; i++) {
        let newCard = document.createElement("img");
        let card = Math.floor(Math.random() * 52)
        newCard.src = cardDeck[card].cardImg;
        total += cardDeck[card].cardValue;
        setTimeout(() => document.getElementById("opponentArea").appendChild(newCard), 1000 * i);
    }
    document.getElementById("dealer").innerHTML = `Dealer - ${total}`;
    //reset total for player hand use
    total = 0
    //put cards down slowly on player zone and set player hand value
    for (i = 2; i < 4; i++) {
        let newCard = document.createElement("img");
        let card = Math.floor(Math.random() * 52)
        newCard.src = cardDeck[card].cardImg;
        total += cardDeck[card].cardValue;
        setTimeout(() => document.getElementById("playerArea").appendChild(newCard), 1000 * i);
    }
    document.getElementById("player").innerHTML = `Player - ${total}`;
    //clear deal button, add hit and stay button
    document.getElementById("buttonAndResult").innerHTML = '';
    let hitButton = document.createElement("input");
    hitButton.id = "hitButton";
    hitButton.type = "button";
    hitButton.value = "HIT!";
    hitButton.onclick = playerHit;
    let stayButton = document.createElement("input");
    stayButton.id = "stayButton";
    stayButton.type = "button";
    stayButton.value = "STAY!";
    stayButton.onclick = computerTurn;
    //write new buttons for play
    document.getElementById("buttonAndResult").appendChild(hitButton);
    document.getElementById("buttonAndResult").appendChild(stayButton);
}

function playerHit() {
    //draw card
    let card = Math.floor(Math.random() * 52)
    //assign card
    let newCard = document.createElement("img");
    newCard.src = cardDeck[card].cardImg;
    document.getElementById("playerArea").appendChild(newCard)
    //update hand total
    let total = document.getElementById("player").innerHTML.match(/(\d+)/);
    total = Number(total[0]) + cardDeck[card].cardValue;

    document.getElementById("player").innerHTML = `Player - ${total}`;
}

function computerTurn() {

}