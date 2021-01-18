function getAnswer() {
    //get data and return current correct response
    let fizz = Number(localStorage.getItem("fizz"));
    let buzz = Number(localStorage.getItem("buzz"));
    let currentNum = Number(localStorage.getItem("currentNum"));

    //build answer
    let answer = "";
    if (isDivisable(currentNum, fizz)) {answer += "fizz";}
    if (isDivisable(currentNum, buzz)) {answer += "buzz";}
    if (answer == "") {answer += currentNum}

    //send answer back
    console.log(answer);
    return answer;
}

function isDivisable(num, divisor) {
    if(num % divisor == 0) {return true;}
    else {return false;}
}