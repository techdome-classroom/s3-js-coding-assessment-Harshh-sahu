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
        // If the character is a closing bracket
        if (map[char]) {
            // Pop the top element from the stack (or use a placeholder if the stack is empty)
            const topElement = stack.length > 0 ? stack.pop() : '#';

            // If the top element doesn't match the corresponding opening bracket, return false
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            // If the character is an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    return stack.length === 0;
};



module.exports = { isValid };


