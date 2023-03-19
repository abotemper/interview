//在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，
//每一列都按照从上到下递增的顺序排序。
//请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数.

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]

// 标签：数组遍历
// 从矩阵的左下角看，上方的数字都比其小，右方的数字都比其大，所以依据该规律去判断数字是否存在
// 设当前数字为 cur，目标数字为 target，当 target < cur 时，cur 更新为其上面的数字，当 target > cur 时，
// cur 更新为其右侧的数字，直到相等则返回 true，否则到了矩阵边界返回 false
// 时间复杂度：
// O(m+n)

class Solution {
    public boolean findNumberIn2DArray(int[][] matrix, int target) {
        if(matrix.length == 0)
            return false;

        int x = 0;
        int y = matrix.length - 1;

        while(x < matrix[0].length && y >= 0){
            if(matrix[y][x] > target) {
                y--;
            } else if(matrix[y][x] < target) {
                x++;
            } else {
                return true;
            }
        }

        return false;
    }
}





