const removeFromArray = function(array, ...toRemove) {
    output = (array.filter((number) => !toRemove.includes(number)));
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
