// Create a binary search that returns a boolean for whether the target exists
// in the array. (Try implementing with both recursion and iteration!)
function binarySearch(array, target) {
    if (array.length === 0) return false;
    let middle = Math.floor(array.length / 2);

    if (target < array[middle]) {
        let leftArray = array.slice(0, middle);
        return binarySearch(leftArray);
    }
    if (target > array[middle]) {
        let rightArray = array.slice(middle + 1);
        return binarySearch(rightArray);
    }
    if (target === array[middle]) return true;
}

function binarySearchIndex(array, target, lo = 0, hi = array.length - 1) {
    if (lo > hi) {
        return -1;
    }

    let midIdx = Math.floor((lo + hi) / 2);

    if (target < array[midIdx]) {
        return binarySearchIndex(array, target, lo, midIdx);
    } else if (target > array[midIdx]) {
        return binarySearchIndex(array, target, midIdx + 1, hi);
    } else {
        return midIdx;
    }
}

function binarySearchIteration(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let pivot = Math.floor((left + right) / 2);
    while (nums[pivot] !== target && left <= right) {
        if (target < nums[pivot]) {
            right = pivot - 1;
        }
        if (target >= nums[pivot]) {
            left = pivot + 1;
        }
        pivot = Math.floor((left + right) / 2);
    }
    if (target === nums[pivot]) return pivot;
    return -1;
}
