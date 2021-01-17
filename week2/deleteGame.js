function deleteGame() {
    //clear the game area and data
    document.getElementById("gameArea").textContent = '';
    localStorage.removeItem("fizz");
    localStorage.removeItem("buzz");
    localStorage.removeItem("currentNum");

    //restore to game start button
    var newInput = document.createElement("input");
    newInput.id = "gameMake";
    newInput.type = "button";
    newInput.value = "Let's Play!";
    newInput.setAttribute("onclick", "onclick=makeGame();");
    document.getElementById("gameArea").appendChild(newInput);


}