function makeGame() {
    //establish fizz & buzz
    let max = 7;
    //fizz & buzz should be between 2 - 8
    let num1 = Math.floor(max * Math.random()) + 2;
    let num2 = Math.floor(max * Math.random()) + 2;
    //make sure they aren't the same number
    while (num1 == num2) {num1 = Math.floor(max * Math.random()) + 2;}
    //set smallest num to fizz and biggest num to buzz
    if (num1 < num2) {
        localStorage.setItem("fizz", num1);
        localStorage.setItem("buzz", num2);
    }
    else {
        localStorage.setItem("fizz", num2);
        localStorage.setItem("buzz", num1);
    }

    buildGameArea();

    //play
    localStorage.setItem("currentNum", 1);
    computerTurn();
}

function buildGameArea() {
    //clean up game area for building
    document.getElementById("gameArea").textContent = '';

    //flor closing the game
    let newInputQuit = document.createElement("input");
    newInputQuit.id = "gameDelete";
    newInputQuit.type = "button";
    newInputQuit.value = "I'm Done!";
    newInputQuit.setAttribute("onclick", "onclick=deleteGame();");
    //game instructions
    let gameInstructions = document.createElement("p");
    gameInstructions.innerText = `The game is simple, you say the number following 
    the previous number, BUT if the number is divisable by 
    (${localStorage.getItem("fizz")}) you say Fizz, if the number is divisable by 
    (${localStorage.getItem("buzz")}) you say Buzz, or if the number is divisable 
    by both (${localStorage.getItem("fizz")}) & (${localStorage.getItem("buzz")}) 
    you say FizzBuzz.  BEST OF LUCK!`
    //for displaying game
    let newOutput = document.createElement("textarea");
    newOutput.id = "gameOutput"
    newOutput.rows = "7"
    newOutput.cols = "50"
    //for answering
    let newInputAnswer = document.createElement("input");
    newInputAnswer.id = "gameAnswer";
    newInputAnswer.type = "text";
    newInputAnswer.placeholder = "Answer";
    let newInputSubmit = document.createElement("input");
    newInputSubmit.id = "gameSubmit";
    newInputSubmit.type = "button";
    newInputSubmit.value = "Submit";
    newInputSubmit.onclick = playerTurn;

    //put it all in
    document.getElementById("gameArea").appendChild(newInputQuit);
    document.getElementById("gameArea").appendChild(gameInstructions);
    document.getElementById("gameArea").appendChild(newOutput);
    document.getElementById("gameArea").appendChild(newInputAnswer);
    document.getElementById("gameArea").appendChild(newInputSubmit);
}