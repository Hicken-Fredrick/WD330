function endOfDealerTurn(total) {
    //clear area
    document.getElementById("buttonAndResult").innerHTML = '';
    //make button for new game
    makeDealButton();
    //get player hand total
    let playerTotal = document.getElementById("player").innerHTML.match(/(\d+)/);
    playerTotal = playerTotal[0];
    console.log(total);
    console.log(playerTotal);
    //find winner
    if (playerTotal > total) {
        playerWin();
    }
    else {
        playerLoss();
    }
}
//bust takes total and state for player (0) or dealer (1)
function bust(total, dealerPlayer) {
    //clear area
    document.getElementById("buttonAndResult").innerHTML = '';
    //make button for new game
    makeDealButton();
    //build output bust result to player
    if (dealerPlayer == 0) {
        playerLoss(total);
    }
    //build output bust result for dealer
    else {
        playerWin(total);
    }
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

function makeDealButton() {
    //build deal button
    let dealButton = document.createElement("input");
    dealButton.id = "deal";
    dealButton.type = "button";
    dealButton.value = "Deal";
    dealButton.onclick = deal;
    //place deal button
    document.getElementById("buttonAndResult").appendChild(dealButton);
}