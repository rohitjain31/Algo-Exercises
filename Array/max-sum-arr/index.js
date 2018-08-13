// Question ---- Find maximum value of Sum( i*arr[i]) with only rotations on given array allowed

// Simple solution
// find sum of array with all rotation one by one and find the maximum
// time complexity will be O(n*2)

// Efficient solution
// we can derive the equtation for with j rotation
// Rj - Rj-1 = arrSum - n * arr[n-j]
// Rj = Rj-1 + arrSum - n * arr[n-j]   --- we will use this
// now find the sum of array and find the maximum of Rj-Rj-1
// Time complexity will be O(n)
// Auxiliary Space : O(1)

function findMaxSum(arr, size) {
    var sum = arr[0];
    var currVal = 0;
    for (var i=1; i< size; i++) {
        sum += arr[i];
        currVal += i*arr[i];
    }

    var max = currVal;

    for (var j= 1; j< size; j++) {
        currVal += sum - size*arr[size-j];

        if (currVal > max) {
            max = currVal;
        }
    }

    return max;

}

(function mainMethod() {
    const inputArr = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const maxSum = findMaxSum(inputArr, inputArr.length);

    console.log(maxSum);
})();