function bubbleSort(array) {
    let noSwap;
    for (let i = array.length - 1; i >= 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; ij++) {
            if (array[j] > array[j + 1]) {
                swap(array, i, i + 1);
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return array;
}

// A swap helper function may be useful to implement the sort function above
function swap(array, idx1, idx2) {
    [array[idx1], array[idx2]];
}
