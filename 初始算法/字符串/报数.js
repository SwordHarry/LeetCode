/**
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 被读作  "one 1"  ("一个一") , 即 11。
11 被读作 "two 1s" ("两个一"）, 即 21。
21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。

注意：整数顺序将表示为一个字符串。

 

示例 1:

输入: 1
输出: "1"
示例 2:

输入: 4
输出: "1211" 
 */
/**
 *  题目解释：
 *      第一个开始是 '1'，读作 1 个 1
 *      故 第二个就是 '11' ，读作 2 个 1
 *      第三个是 '21'，读作 1 个 2，1 个 1 
 *      所以第四个是'1211'
 *      即前一个的读作中数字的拼接是下一个的输出
 */ 
/**
* @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    let str = '1';
    
    while(n > 1) {
        let buffle = str[0];
        const map = [[1,buffle]];
        
        // 从第二个字符串开始遍历
        for(let i = 1;i < str.length;i++) {
             if(str[i] === buffle) {
                map[map.length - 1][0]++;
            } else {
                buffle = str[i];
                map.push([1,buffle]);
            }
        }
        
        str = '';
        map.forEach((item,index) => {
            str += (item[0] + '' + item[1]);
        });
        
        n--;
    }
    
    
    return str;
};