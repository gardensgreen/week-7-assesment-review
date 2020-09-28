function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle + 1);

    let rightSorted = mergeSort(right);
    let leftSorted = mergeSort(left);
    return merge(rightSorted, leftSorted);
}

// A merge helper function may be helpful in implementing the sort function above
function merge(array1, array2) {
    let merged = [];

    while (array1.length && array2.length) {
        let next;
        if (array1[0] < array2[0]) {
            next = array1.shift();
        } else {
            next = array2.shift();
        }
        merged.push(next);
    }

    return merged.concat(...array1, ...array2);
}
