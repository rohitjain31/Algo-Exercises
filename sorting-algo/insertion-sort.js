// Insertion sort
// In insertion sort we pick the ith item and insert it into
// sorted sequence of array arr[0..i-1];


// Best case complexity --> O(n)
// Worst case Complexity --> O(n*n)
// Auxiliry Space ---> O(1)

(function selectionSort() {
    const inputArr = [12,11,13,5,6];

    for (var i=1; i< inputArr.length; i++) {
        let key = inputArr[i];
        let j = i-1;
        
        while(j >= 0 && inputArr[j] > key) {
            inputArr[j+1] = inputArr[j];
            j--;
        }
        inputArr[j+1] = key;
    }

    // console.log(inputArr);
})();


// Binary insertion sort
// We can use binary search to reduce the numer of comparison in normal
// insertion sort.
// in normal insertion it take O(i) but we can reduce it to O(logi) using binary search.

function binarySearch(arr, item, low, high) {
    if (high <= low) {
        return ((item > arr[low]) ? (low + 1) : low);
    }

    let mid = parseInt((high + low)/2);

    if (item === arr[mid]) {
        return mid + 1;
    }

    if (item > arr[mid]) {
        return binarySearch(arr, item, mid+1, high);
    }

    return binarySearch(arr, item, low, mid-1);
}

(function binaryInsertionSort() {
    const inputArr = [12,11,13,5,6];

    for(var i=1; i< inputArr.length; i++) {
        let key = inputArr[i];
        let j = i-1;

        let loc = binarySearch(inputArr, key, 0, j);

        while(j >= loc) {
            inputArr[j+1] = inputArr[j];
            j--;
        }
        inputArr[j+1] = key;
    }

    // console.log(inputArr);
})();