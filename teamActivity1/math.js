function sumTo() {
    const userInput = Number(document.getElementById("userInput").value)
    console.log(userInput);

    checkNum(userInput);

    let answer = 0;

    for (i = 0; i <= userInput; i++) {
        answer += i;
    }

    document.getElementById("output").innerHTML = answer;
}

function add() {
    const userInput1 = Number(document.getElementById("userDblIn1").value)
    const userInput2 = Number(document.getElementById("userDblIn2").value)
    console.log(userInput1);
    console.log(userInput2);

    checkNum(userInput1);
    checkNum(userInput2);

    document.getElementById("output").innerHTML = userInput1 + userInput2;
}

function sub() {
    const userInput1 = Number(document.getElementById("userDblIn1").value)
    const userInput2 = Number(document.getElementById("userDblIn2").value)
    console.log(userInput1);
    console.log(userInput2);

    checkNum(userInput1);
    checkNum(userInput2);

    document.getElementById("output").innerHTML = userInput1 - userInput2;

}

function mult() {
    const userInput1 = Number(document.getElementById("userDblIn1").value)
    const userInput2 = Number(document.getElementById("userDblIn2").value)
    console.log(userInput1);
    console.log(userInput2);

    checkNum(userInput1);
    checkNum(userInput2);

    document.getElementById("output").innerHTML = userInput1 * userInput2;

}

function checkNum(number, callback) {
    if (isNaN(number)) {
        document.getElementById("output").innerHTML = "ERROR - NOT A NUMBER";
        throw new Error("Argument of type number is expected.");
        return;
      }
}