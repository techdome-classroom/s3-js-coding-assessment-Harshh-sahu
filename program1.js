/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(input1) {
    // Stack to keep track of opening brackets
    const stack = [];

    // Mapping of closing brackets to their corresponding opening brackets
    const map = { 
        ')': '(', 
        '}': '{', 
        ']': '[' 
    };

    // Loop through each character in the string
    for (let char of input1) {
        if (map[char]) {
            const topElement = stack.length > 0 ? stack.pop() : '#';

            if (topElement !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};



module.exports = { isValid };


