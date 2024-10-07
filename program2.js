
/**
 * @param {string} s - Roman numeral string
 * @return {number} - Corresponding integer value
 */
var romanToInt = function(s) {
    // Mapping Roman numerals to their respective integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0; // Initialize result to 0

    // Loop through the string 's'
    for (let i = 0; i < s.length; i++) {
        // If the current value is less than the next value, subtract the current value
        if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
            result -= romanMap[s[i]];
        } else {
            // Otherwise, add the current value
            result += romanMap[s[i]];
        }
    }

    return result; // Return the computed integer value
};

module.exports = { romanToInt };
