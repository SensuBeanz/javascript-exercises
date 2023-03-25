const reverseString = function(str) {
    let splitString = str.split("");
    let flipString = splitString.reverse();
    let joinString = flipString.join("")
    return joinString;
};

// Do not edit below this line
module.exports = reverseString;
