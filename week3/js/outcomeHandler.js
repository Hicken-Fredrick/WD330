function endOfDealerTurn(total) {
    //clear area
    document.getElementById("buttonAndResult").innerHTML = '';
    //make button for new game
    let dealButton = document.createElement("input");
    dealButton.id = "deal";
    dealButton.type = "button";
    dealButton.value = "Deal";
    dealButton.onclick = deal;
    //get player hand total

    //find winner

    //output result to player
}
//bust takes total and state for player (0) or dealer (1)
function bust(total, dealerPlayer) {
    //clear area
    document.getElementById("buttonAndResult").innerHTML = '';
    //make button for new game
    let dealButton = document.createElement("input");
    dealButton.id = "deal";
    dealButton.type = "button";
    dealButton.value = "Deal";
    dealButton.onclick = deal;
    //build output bust result to player
    if (dealerPlayer == 0) {
        playerLoss(total);
    }
    //build output bust result for dealer
    else {
        playerWin(total);
    }
    //output
    document.getElementById("buttonAndResult").appendChild(dealButton);
}

function playerWin(total) {
    let winText = document.createElement("p");
    winText.innerText = "YOU WIN!";
    winText.id = "win"
    document.getElementById("buttonAndResult").appendChild(winText);
}

function playerLoss(total) {
    let lossText = document.createElement("p");
    lossText.innerText = "YOU LOSE";
    lossText.id = "loss"
    document.getElementById("buttonAndResult").appendChild(lossText);
}