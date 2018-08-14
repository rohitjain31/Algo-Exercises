// Question --- Rearrange positive and negative numbers in O(n) time and O(1) extra space

// Rearrange the array elements so that positive and negative numbers are placed alternatively.
// Number of positive and negative numbers need not be equal.
// If there are more positive numbers they appear at the end of the array.
// If there are more negative numbers, they too appear in the end of the array.

// Input Arr -- [-1, 2, -3, 4, 5, 6, -7, 8, 9]
// Output Arr -- [9, -7, 8, -3, 5, -1, 2, 4, 6]

// Time Complexity: O(n) where n is number of elements in given array.
// Auxiliary Space: O(1)

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function rearrange(arr, size) {
    var i = -1;
    for (var j=0; j< size; j++) {
        if (arr[j] < 0) {
            i++;
            if (i != j) {
                swap(arr, i, j);
            }
        }
    }

    var pos = i + 1;
    var neg = 0;

    while (pos < size && neg < pos && arr[neg] < 0) {
        swap(arr, neg, pos);
        pos++;
        neg += 2;
    }
}

(function mainMethod() {
    const inputArr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];

    rearrange(inputArr, inputArr.length);

    // console.log(inputArr);
})();