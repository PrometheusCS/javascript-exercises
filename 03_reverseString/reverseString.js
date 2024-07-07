const reverseString = function(string) {
    const chars = string.split("");
    const revers = chars.reverse();
    const invertString = revers.join("");
    return invertString;
};

// Do not edit below this line
module.exports = reverseString;
