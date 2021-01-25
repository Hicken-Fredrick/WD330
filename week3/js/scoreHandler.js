function lifeTimeScore() {
    //empty score area
    document.getElementById("lifeTimeScore").innerHTML = '';
    //get wins and losses
    let wins = Number(localStorage.getItem("wins"));
    let losses = Number(localStorage.getItem("losses"));
    //put in wins and losses stats
    let currentScores = document.createElement("h2");
    currentScores.innerText = `WINS:${wins} LOSSES:${losses}`;
    document.getElementById("lifeTimeScore").appendChild(currentScores);
}

function addWin() {
    let wins = Number(localStorage.getItem("wins"));
    wins += 1;
    localStorage.setItem("wins", wins);
}

function addLoss() {
    let losses = Number(localStorage.getItem("losses"));
    losses += 1;
    localStorage.setItem("losses", losses);
}

window.onload = lifeTimeScore();