/**
 * m 肉丸 n 鱼丸 放入 k 个碗里
 * 肉丸可以和肉丸放一起，鱼丸和鱼丸放一起，
 * 但是肉丸不能和鱼丸放一起
 * 允许有空碗
 * 求解的个数
 * 
 */
let result = 0;

function meatAndFish(m, n, k) {

    _handler(m, n, k, m, n);
}

// m 肉丸 n 鱼丸 k 碗 p 上次放的肉丸数 q 上次放的鱼丸数
// * p q 用于去重
function _handler(m, n, k, p, q) {
    
    // 肉丸和鱼丸都放完了
    if (m === 0 && n === 0) {
        result++;
        return;
    }

    if (!k) {
        return;
    }

    if(m < 0 || n < 0) {
        return;
    }

    console.log(m, n, k, p, q)
    if (m > 0) {
        // 放肉丸
        for (let i = p; i >= 0; i--) {
            // 把肉丸放进去
            _handler(m - i, n, k - 1, i, q);
            // 把肉丸取出来
        }
        return;
    }

    if (n > 0) {
        // 放鱼丸
        for (let i = q; i >= 0; i--) {
            _handler(m, n - i, k - 1, p, i);
        }
    }
}

meatAndFish(5, 2, 8);
console.log(result);