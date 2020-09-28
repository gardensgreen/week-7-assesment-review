function insertionSort(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        let currentValue = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}

currentValue = 1;
