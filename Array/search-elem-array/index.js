// Question --- Search an element in a sorted and rotated array.
//      Duplicates are not allowed.

//========================================================================

// // Solution 1 ----- Find pivot point and then do binary search.
// // Complexity ---> O(log n)
// // Space complexity ----> O(1)
// // Here we have found the max or  min element i log n as well in form of pivot point.
//
// function getPivotPoint(arr, start, end) {
//     if (end < start) return -1;
//     if (start === end) return start;
//
//     const mid = Math.floor((end + start) / 2);
//
//     if (mid < end && arr[mid] > arr[mid + 1]) {
//         return mid;
//     }
//
//     if (mid > start && arr[mid] < arr[mid - 1]) {
//         return mid-1;
//     }
//
//     if (arr[start] >= arr[mid]) {
//         return getPivotPoint(arr, start, mid-1);
//     }
//
//     return getPivotPoint(arr, mid + 1, end);
// }
//
// function binarySearch(arr, start, end, key) {
//     if (end < start) return -1;
//
//     const mid = Math.floor((start + end) / 2);
//
//     if (key === arr[mid]) return mid;
//
//     if (key > arr[mid]) {
//         return binarySearch(arr, mid + 1, end, key);
//     }
//
//     return binarySearch(arr, start, mid-1, key);
// }
//
// function binarySearchByPivotPoint(arr, size, key) {
//     const pivot = getPivotPoint(arr, 0, size-1);
//
//     if (pivot === -1) {
//         binarySearch(arr, 0, size - 1, key);
//     }
//
//     if (arr[pivot] === key) {
//         return pivot;
//     }
//
//     if (arr[0] <= key) {
//         return binarySearch(arr, 0, pivot-1, key);
//     }
//
//     return binarySearch(arr, pivot+1, size-1, key);
// }
//
// (function searchElemIndex() {
//     const inputArr = [3,4,5,6,7,1,2];
//     const key = 1;
//
//     const keyIndex = binarySearchByPivotPoint(inputArr, inputArr.length, key);
//
//     console.log(keyIndex);
// })();

//========================================================================

// // Solution 2 --- find middle point and do recursion
// // Complexity ---> O(log n)
// // One pass for binary search
// function search(arr, low, high, key) {
//     if (low > high) return -1;
//
//     const mid = Math.floor((low + high) / 2);
//
//     if (arr[mid] === key) return mid;
//
//     if (arr[low] <= arr[mid]) { // means this left part is sorted
//         if (key >= arr[low] && key < arr[mid]) {
//             return search(arr, low, mid-1, key);
//         }
//
//         return search(arr, mid + 1, high, key);
//     }
//
//     if (key >= arr[mid] && key <= arr[high]) { // means right part is sorted
//         return search(arr, mid + 1, high, key);
//     }
//
//     return search(arr, low, mid-1, key);
// }
//
// (function searchElemIndex() {
//     const inputArr = [3,4,5,6,7,1,2];
//     const key = 5;
//
//     const keyIndex = search(inputArr, 0, inputArr.length, key);
//
//     console.log(keyIndex);
// })();
