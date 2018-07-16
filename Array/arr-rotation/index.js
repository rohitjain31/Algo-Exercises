// arr ---> [1,2,3,4,5,6,7] -----> [3,4,5,6,7,1,2]

// // using temporary array
// // time ---> O(n)
// // space ---> O(n)
// (function rotate() {
//     const inputArr = [1,2,3,4,5,6,7];
//     let tempArr = [];
//     const step = 3;
//     let i = 0;
//
//     inputArr.forEach((elem, index) => {
//         if (inputArr.length > (index + step)) {
//             tempArr.push(inputArr[index + step]);
//         } else {
//             tempArr.push(inputArr[i]);
//             i++;
//         }
//     });
//
//     console.log(tempArr);
// })();



// // Rotate one by one in same array
// // time ---> O(n*step)
// // space ---> O(1)
// (function rotate() {
//     let inputArr = [1, 2, 3, 4, 5, 6, 7];
//     const step = 3;
//
//     for (let i=0; i<step; i++) {
//         let tempItem = inputArr[0];
//         for (let j=0; j<inputArr.length; j++) {
//             inputArr[j] = j < inputArr.length - 1 ? inputArr[j+1] : tempItem;
//         }
//     }
//
//     console.log(inputArr);
// })();


// // through Reversal Algorithm
// // Reverse(0, d) -> Reverse(d+1, n) -> Reverse(1, n)
// // complexity ---> O(n)
// function reverse(arr, start, end) {
//     while (start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++; end--;
//     }
// }
//
// (function rotate() {
//     const inputArr = [1,2,3,4,5,6,7];
//     const step = 2;
//     reverse(inputArr, 0, step-1);
//     reverse(inputArr, step, inputArr.length-1);
//     reverse(inputArr, 0, inputArr.length-1);
//
//     console.log(inputArr);
// })();


// // cyclically rotate an array clockwise by one
// // arr --> [1,2,3,4,5] -----> [5,1,2,3,4]
// // Time Complexity -- O(n)
// // space complexity --- O(1)
// (function cyclicRotate() {
//     const inputArr = [1,2,3,4,5];
//     const temp = inputArr[inputArr.length - 1];
//
//     for (var i=inputArr.length-1; i>0; i--) {
//         inputArr[i] = inputArr[i-1];
//     }
//     inputArr[0] = temp;
//     console.log(inputArr);
// })();
