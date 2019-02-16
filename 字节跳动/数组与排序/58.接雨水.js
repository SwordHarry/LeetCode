/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。



上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

示例:

输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
 */
/**
 * 思路：
 *      从左往右遍历数组，
 *      可以发现水坑是一个两边高中间低的，可以尝试利用栈
 *      
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const len = height.length;
    if (!len || len === 1) {
        return 0;
    }

    let water = 0; // 总接水量
    let cur = 0;

    const stack = [];
    let temp = 0; // 中间接水量
    while (cur < len) {
        while (stack.length && height[cur] > height[stack[stack.length - 1]]) {
            let top = stack.pop();
            if (!stack.length) {
                break;
            }
            let distance = cur - stack[stack.length - 1] - 1;

            temp = Math.min(height[cur], height[stack[stack.length - 1]]) - height[top];

            water += temp * distance;
        }
        stack.push(cur);
        cur++;
    }

    return water;
};

/**
 *  简明易懂，双指针逼近解法
 *  定义 左边界和右边界
 *  比如 2 0 3 0 1
 *  左边指向2，右边指向1
 *  左边向3移动，右边向3移动
 *  当左边等于右边，遍历完毕
 *  1 -> 3 可以很清楚地知道装1单位水
 *  而3 -> 1 很难知道要装几单位水
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const len = height.length;
    if (!len || len === 1) {
        return 0;
    }

    let water = 0; // 总接水量
    // 双指针逼近找 雨水
    let left = 0;
    let right = len - 1;

    while (left < len - 1 && height[left] <= height[left + 1]) {
        left++;
    }

    while (right > 0 && height[right] <= height[right - 1]) {
        right--;
    }


    while (left < right) {
        const leftHeight = height[left];
        const rightHeight = height[right];

        if (leftHeight <= rightHeight) {
            while (left < right) {
                left++;
                if (height[left] < leftHeight) {
                    water += leftHeight - height[left];
                } else {
                    break;
                }
            }
        } else {
            while (left < right) {
                right--;
                if (height[right] < rightHeight) {
                    water += rightHeight - height[right];
                } else {
                    break;
                }
            }
        }
    }

    return water;
};