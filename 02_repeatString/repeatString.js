const repeatString = function(word, num) {
    if(num < 0) {
        return "ERROR";
    }
    let repeated = "";
    for(i=0; i<num; i++) {
        repeated += word;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
