// Quick sort is a divide and conquer algorithm. It picks an element as pivot and partition
// the given array around the picked pivot point.

// The Key process in quick sort is partition().

// Target of partition is, given an array and an element x of array (pivot point) and put x at its
// correct position in sorted array and put all smaller element before x and put all greater element
// after x. This should be done in linear time. 


//The time taken by QuickSort depends upon the input array and partition strategy.

// Worst Case: The worst case occurs when the partition process always picks
// greatest or smallest element as pivot. If we consider above partition strategy where
// last element is always picked as pivot,
// the worst case would occur when the array is already sorted in increasing or decreasing order.

// Best Case: The best case occurs when the partition process
// always picks the middle element as pivot.

function partitionArray(arr, l, h) {
    const pivot = arr[h]; // lets say pivot point is last element

    var j = l-1; // index of smaller element
    for (var i=l; i< h; i++) {
        if (arr[i] < pivot) {
            j++;
            if (i != j) {
                let x = arr[j];
                arr[j] = arr[i];
                arr[i] = x;
            }
        }
    }

    let x = arr[j+1];
    arr[j+1] = arr[h];
    arr[h] = x;

    return j+1;
}

function quickSortAlgo(arr, low, high) {
    if (low < high) {
        const pi = partitionArray(arr, low, high);

        quickSortAlgo(arr, low, pi-1);
        quickSortAlgo(arr, pi + 1, high);
    }
}

(function mainMethod() {
    const inputArr = [10,80,30,90,50,40,70];
    quickSortAlgo(inputArr, 0, inputArr.length-1);

    console.log(inputArr);
})();


// 3-way Quick sort...
// Example - {1, 4, 2, 4, 2, 4, 1, 2, 4, 1, 2, 2, 2, 2, 4, 1, 4, 4, 4} and pivot is 4.

// In 3 Way QuickSort, an array arr[l..r] is divided in 3 parts:
// a) arr[l..i] elements less than pivot.
// b) arr[i+1..j-1] elements equal to pivot.
// c) arr[j..r] elements greater than pivot