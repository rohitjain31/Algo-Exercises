// Selection Sort
// Sorts an array by repeatedly finding the minimum element from unsorted
// part and putting it at the begining.
// This algorithm maintains 2 subarrays.
//  1. The subarray which is already sorted.
//  2. Remaining subarray which is unsorted.

// Time Complexity ----> O(n*n)
// Auxiliary Space ----> O(1)

(function selectionSort() {
    const inputArr = [64, 6, 25, 12, 22, 11];

    for (var i=0; i<inputArr.length; i++) {
        var min = inputArr[i];
        for (var j=i+1; j<inputArr.length; j++) {
            if (inputArr[j] < min) {
                min = inputArr[j];
            }
        }
        var index = inputArr.indexOf(min);
        var temp = inputArr[i];
        inputArr[i] = min;
        inputArr[index] = temp;
    }

    console.log(inputArr);
})();
