// 快速排序
function QSort(arr, low, high) {
    if(low < high) {
        var index = _partition(arr,low,high);
        QSort(arr, low, index - 1);
        QSort(arr, index + 1,high);
    }
}

function _partition(arr,low,high) {

    while(low < high) {
        var key = arr[low];
        while(low < high && arr[high] >= key) {
            --high;
        }
        [arr[low],arr[high]] = [arr[high], arr[low]];

        while(low < high && arr[low] <= key) {
            ++low;
        }
        [arr[low],arr[high]] = [arr[high], arr[low]];
    }

    return low;
}

const arr = [49,38,65,97,76,13,27,49];

const newArr = MSort(arr);
console.log(newArr);

// 归并排序
function MSort(arr) {
    const len = arr.length;
    if(len > 1) {
        const mid = ~~(len / 2);
        const left = arr.slice(0,mid);
        const right = arr.slice(mid);
        return _merge(MSort(left),MSort(right));
    } else {
        return arr;
    }
}
function _merge(left,right) {
    const arr = [];
    while(left.length && right.length) {
        if(left[0]  < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    return arr.concat(left,right);
}

