/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    var flag = true;
    var len = board.length;
    // 检测行和列
    for(var n = 0;n < len;n++) {
        flag = checkBoard(board,len,n);
        if(!flag) {
            return false;
        }
    }
    
    // 检测三宫格斜线
    for(var i = 0;i < len/3;i++) {
        for(var j = 0;j < len/3;j++) {
            flag = checkSmallBoard(board,len/3,i,j);
            if(!flag) {
                return false;
            }
        }
    }
    
    return flag;
};

// 检测行和列
var checkBoard = function(board,len,n) {
    var rowMap = {};
    var ColumnMap = {};
    for(var j = 0;j < len;j++) {
        if(rowMap[board[n][j]] && board[n][j] !== '.'){
            return false;
        }
        if(ColumnMap[board[j][n]] && board[j][n] !== '.') {
            return false;
        }
        rowMap[board[n][j]] = true;
        ColumnMap[board[j][n]] = true;
    }

    return true;
}
// 检测每个小九宫格
var checkSmallBoard = function(board,len,n,m) {
    var map = {};
    for(var i = 0;i < len;i++) {
        for(var j = 0;j < len;j++) {
            if(map[board[i + n * 3][j + m * 3]] && board[i + n * 3][j + m * 3] !== ".") {
                return false;
            }
            map[board[i + n * 3][j + m * 3]] = true;
        }
    }
    
    return true;
}

// answer algorithm
/**
 * 难点主要在如何把行，列，小九宫格的三种判断放在一起执行，提高效率
 * ~~ 为 效率更快的 Math.floot()
 * 仅需将 数独 遍历一次，每一次遍历都将 三种判断的标志位确定
 */
var isValidSudoku_answer = function(board) {

    let row = {}
    let col = {}
    let box = {}
    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            if (board[i][j] !== '.') {
                let c = board[i][j]+'';
                let key = (~~(i/3)*3 + ~~(j/3)) + '' + c
                if (row[i+c] || col[c+j] || box[key]) return false;
                row[i+c] = true;
                col[c+j] = true;
                box[key] = true;
            }
        }
    }
    return true;
}