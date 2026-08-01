const sumAll = function(firstNum, secondNum) {
    let output = [];
    output.push(firstNum);
    while (firstNum != secondNum) {
        if (firstNum < 0 || secondNum < 0) {
            return "ERROR";
        } else if (firstNum % 1 != 0 || secondNum % 1 != 0) {
            return "ERROR";
        } else if (typeof firstNum != "number" || typeof secondNum != "number") {
            return "ERROR";
        }else if (firstNum > secondNum) {
            firstNum--;
            output.push(firstNum);
        } else {
            firstNum++;
            output.push(firstNum);
        }
    }
    return output.reduce((toAdd, currentValue) => toAdd + currentValue, 0);
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
