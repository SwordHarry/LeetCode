function QSort(arr, low, high) {
    // 对 arr 中的子序列 arr[low ... high] 作快速排序
    if (low < high) {
        var pivotloc = _partition(arr, low, high);
        QSort(arr, low, pivotloc - 1);
        QSort(arr, pivotloc + 1, high);
    }
}

function _partition(arr, low, high) {
    var pivotkey = arr[low];
    while (low < high) {
        while (low < high && arr[high] >= pivotkey) {
            --high;
        }
        [arr[low], arr[high]] = [arr[high], arr[low]];

        while(low < high && arr[low] <= pivotkey) {
            ++low;
        }
        [arr[low], arr[high]] = [arr[high], arr[low]];
    }

    return low;
}

const arr = [49,38,65,97,76,13,27,49];
console.log(arr);
QSort(arr,0,arr.length - 1);
console.log(arr);