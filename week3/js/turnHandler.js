function deal() {
    //first 2 for dealer second 2 for player
    let newCards = [];
    for (i = 0; i < 4; i++) {
        newCards[i] = Math.floor(Math.random() * 52);
    }

    //put cards down slowly on dealer zone
    for (i = 0; i < 2; i++) {
        let newCard = document.createElement("img");
        newCard.src = cardDeck[newCards[i]].cardImg;
        setTimeout(() => document.getElementById("opponentArea").appendChild(newCard), 1000 * i);
    }

    //put cards down slowly on player zone
    for (i = 2; i < 4; i++) {
        let newCard = document.createElement("img");
        newCard.src = cardDeck[newCards[i]].cardImg;
        setTimeout(() => document.getElementById("playerArea").appendChild(newCard), 1000 * i);
    }

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

    document.getElementById("buttonAndResult").appendChild(hitButton);
    document.getElementById("buttonAndResult").appendChild(stayButton);
}

function playerHit() {

}

function computerTurn() {

}