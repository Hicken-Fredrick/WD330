function computerTurn() {
    //get data
    let answer = getAnswer();
    let computerResponse = `WOPR: ${answer}`;
    //iterate current num
    localStorage.setItem("currentNum", Number(localStorage.getItem("currentNum"))+1);

    //output AI response to textarea "gameOutput"
    let fullText = document.getElementById("gameOutput").value;
    fullText += `\n ${computerResponse}`;
    document.getElementById("gameOutput").value = fullText;

    //scroll to bottom
    let textarea = document.getElementById('gameOutput');
    textarea.scrollTop = textarea.scrollHeight;
}

function playerTurn() {
    //get player input trim it and cast to lower
    let playerAnswer = document.getElementById("gameAnswer").value;
    playerAnswer = playerAnswer.trim();
    playerAnswer= playerAnswer.toLowerCase();

    //get answer
    let answer = getAnswer();

    //check answer
    if(playerAnswer == answer) {
        //put in player answer
        let fullText = document.getElementById("gameOutput").value;
        fullText += `\n Falken: ${document.getElementById("gameAnswer").value}`;
        document.getElementById("gameOutput").value = fullText;
        //iterate number
        localStorage.setItem("currentNum", Number(localStorage.getItem("currentNum"))+1);
        //scroll to bottom
        let textarea = document.getElementById('gameOutput');
        textarea.scrollTop = textarea.scrollHeight;
    }
    else {
        //delete game
        deleteGame();
        //output correct answer for player
        let failureResponse = document.createElement("p");
        failureResponse.innerText = `SORRY! It looks like the right answer was ${answer}`;
        document.getElementById("gameArea").appendChild(failureResponse);
    }

    //pass turn back to computer
    computerTurn();
}