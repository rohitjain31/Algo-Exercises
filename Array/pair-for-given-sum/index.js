// Question ---- Given an array A[] and a number x, check for pair in A[] with sum as x

function partition(arr, low, high) {
    var pivot = arr[high];
    var min = low-1;

    for (var j=low; j< high; j++) {
        if (arr[j] <= pivot) {
            min++;
            var temp = arr[min];
            arr[min] = arr[j];
            arr[j] = temp;
        }
    }

    var temp = arr[min+1];
    arr[min+1] = arr[high];
    arr[high] = temp;

    return min+1;
}

function sortArrayByQuickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        sortArrayByQuickSort(arr, low, pi-1);
        sortArrayByQuickSort(arr, pi+1, high);
    }
}

function hasArrayTwoElem(arr, size, sum) {
    sortArrayByQuickSort(arr, 0, size-1);

    var low = 0;
    var high = size-1;

    while(low < high) {
        var temp = arr[low] + arr[high];

        if (temp === sum) {
            return true;
        }

        temp < sum ? low++ : high--;
    }

    return false;
}

(function mainMethod() {
    const inputArr = [1, 4, 45, 6, 10, -8];
    const sum = 15;
    const ifExist = hasArrayTwoElem(inputArr, inputArr.length, sum);

    console.log(ifExist);
})();



// Question --- Given a sorted and rotated array, find if there is a pair with a given sum
// Assumption -- No duplicates are allowed.
// Solution --- Here we will find the pivot point so we will get the maximum and minimum element and
// rotate our min and max index accordingly.

function pairInSortedArray(arr, size, sum) {
    for(var i=0; i< size; i++) {
        if (arr[i+1] < arr[i]) {
            break;
        }
    }

    var min = (i+1) % size;
    var max = i;

    while(min != max) {
        var temp = arr[min] + arr[max];

        if (temp == sum) {
            return true;
        }

        temp < sum ? (min = (min + 1) % size) : (max = (size + max -1) % size);        
    }

    return false;
}

(function mainMethodForSortedArr() {
    const inputArr = [11, 15, 6, 8, 9, 10];
    const sum = 16;

    const ifExist = pairInSortedArray(inputArr, inputArr.length, sum);

    console.log(ifExist);
})();
