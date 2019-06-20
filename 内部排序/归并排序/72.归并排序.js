/**
 * 熟悉高级排序算法之：归并排序
 *  2-路归并排序的核心操作 是 将一维数组中前后相邻的两个有序序列归并为一个有序序列
 */
function MSort(arr) {
    const len = arr.length;
    if (len > 1) {
        const mid = ~~(len / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        return _merge(MSort(left), MSort(right));
    } else {
        return arr;
    }
}

function _merge(left, right) {
    const arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    return arr.concat(left, right);
}

const arr = [49, 38, 65, 97, 76, 13, 27];
const newArr = MSort(arr);

console.log(newArr, arr);