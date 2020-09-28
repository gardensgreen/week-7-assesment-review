function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length - 1; i++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(arr, min, i);
        }
    }
    return arr;
}

// A swap helper function may be useful to implement the sort function above
function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
