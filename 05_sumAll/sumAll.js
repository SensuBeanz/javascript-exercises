const sumAll = function(first, second) {
    if (!Number.isInteger(first) || !Number.isInteger(second)) return "ERROR";
    if (first < 0 || second < 0) return "ERROR";
    if (first > second) {
        let temp = second;
        second = first;
        first = temp;
    }
    let runNum = 0
    for (let i = first; i <= second; i++) {
       runNum += i;
    }
    return runNum
};

// Do not edit below this line
module.exports = sumAll;
