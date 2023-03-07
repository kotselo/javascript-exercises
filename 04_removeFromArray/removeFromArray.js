const removeFromArray = function(array, ...args) {
    return array.filter(o => !args.includes(o));
};

// Do not edit below this line
module.exports = removeFromArray;
