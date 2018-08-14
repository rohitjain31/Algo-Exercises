// Question -- Write a program to reverse an array or string

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

// Iterative way
// Time Complexity : O(n)

function swap(arr, i, j) {
    var temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

function reverseItems(arr, start, end) {
    while (start < end) {
        swap(arr, start, end);
        start++;
        end--;
    }
}

(function mainMethod() {
    const inputArr = [4, 5, 1, 2];

    reverseItems(inputArr, 0, inputArr.length-1);

    // console.log(inputArr);
})();


// Recursive way
// Time Complexity --- O(n)

function reverseItemsWithRecursion(arr, start, end) {
    if (start < end) {
        swap(arr, start, end);
        reverseItemsWithRecursion(arr, start+1, end-1);
    }
}

(function mainMethod2() {
    const inputArr = [1, 2, 3, 4, 5, 6];

    reverseItemsWithRecursion(inputArr, 0, inputArr.length-1);

    // console.log(inputArr);
})();
