// Question --- Reorder an array according to given indexes
// Given two integer arrays of same size, “arr[]” and “index[]”, reorder elements in “arr[]” according to given index array.
// It is not allowed to given array arr’s length

// Example --- 
// Input:  arr[]   = [50, 40, 70, 60, 90]
//         index[] = [3,  0,  4,  1,  2]
// Output: arr[]   = [40, 60, 90, 50, 70]
//         index[] = [0,  1,  2,  3,   4]


// Solution
// By using temp array as storage

function reorderArrayByStorage(arr, index) {
    var tempArr = [];
    for (var i= 0; i< arr.length; i++) {
        tempArr[index[i]] = arr[i];
    }

    for (var j= 0; j< arr.length; j++) {
        arr[j] = tempArr[j];
        index[j] = j;
    }
}

(function mainMethod() {
    const inputArr = [50, 40, 70, 60, 90];
    const index = [3,  0,  4,  1,  2];

    reorderArrayByStorage(inputArr, index);

    // console.log(inputArr);
    // console.log(index);
})();


// By not using temporary storage

function reorderArrayWithoutStorage(arr, index) {
    for (var i= 0; i< arr.length; i++) {
        while (index[i] != i) {
            var oldIndex = index[index[i]];
            var oldVal = arr[index[i]];

            arr[index[i]] = arr[i];
            index[index[i]] = index[i];

            index[i] = oldIndex;
            arr[i] = oldVal;
        }
    }
}

(function mainMethod2() {
    const inputArr = [50, 40, 70, 60, 90];
    const index = [3,  0,  4,  1,  2];

    reorderArrayWithoutStorage(inputArr, index);

    // console.log(inputArr);
    // console.log(index);
})();