// ---- Example
// reverse('apple') = 'leppa'
// reverse('rohit') = 'tihor'

function reverse(str) {
    // solution number 3 => use reduce helper
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');
}

module.exports = reverse;

// // solution number 1 =>  Array.prototype.reverse()
// const arr = str.split('');
// arr.reverse();
// return arr.join('');

// // solution number 2 => use for loop
// let reversed = '';
// for(let character of str) {
//     reversed += character;
// }
// return reversed;
