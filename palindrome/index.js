// Directions ---
// Given a string and return true if string is palindrome
// or false if it is not. Palindromes are strings that form
// the same word if it is reversed.
// *DO* include spaces and punctuation in determining if the string
// is a palindrome.
// --Example
// Palindrome("abba") === true
// Palindrome("abssdssd") === false

function palindrome(str) {
    // solution number 2 --- using every helper on array
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

module.exports = palindrome;


// // solution number 1 --- using reverse method
// const reversed = str.split('').reverse().join('');
// return str === reversed;

// // solution number 2 --- using every helper on array
// return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
// });
