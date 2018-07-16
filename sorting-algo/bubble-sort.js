// Bubble Sort
// Sorting algorithm that works by repeatedly swapping the adjacent
// element if they are in wrong order.

// Worst case Time complexity ---> O(n*n)
// Best case time complexity ---> O(n)
// Auxiliary space -----> O(1)

// Iteration method
(function bubbleSort() {
    const inputArr = [5, 1, 4, 2, 8];

    for (var i=0; i< inputArr.length-1; i++) {
        var swapped = false;

        for (var j=0; j< inputArr.length-i-1; j++) {
            if (inputArr[j] > inputArr[j+1]) {
                var temp = inputArr[j];
                inputArr[j] = inputArr[j+1];
                inputArr[j+1] = temp;
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    console.log(inputArr);
})();


// Recursive method

function sort(arr, size) {
    if (size === 1) return;

    for (var i=0; i< size-1; i++) {
        if (arr[i] > arr[i+1]) {
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }

    sort(arr, size-1);
}

(function bubbleSortWithRecursion() {
    const inputArr = [12, 25, 22, 64, 90, 34, 11];
    sort(inputArr, inputArr.length);

    console.log(inputArr);     
})();
