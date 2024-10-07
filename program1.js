/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack to keep track of opening brackets
    const stack = [];
    
    // Mapping of closing brackets to their corresponding opening brackets
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Loop through each character in the string
    for (let char of s) {
        // If it's a closing bracket
        if (map[char]) {
            // Pop the top element from the stack, or use a dummy value if stack is empty
            const topElement = stack.length > 0 ? stack.pop() : '#';
            
            // If the popped element doesn't match the corresponding opening bracket
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were properly matched
    return stack.length === 0;
};

module.exports = { isValid };


