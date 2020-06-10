/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/*
1. 先将数组转为树
状态方程：
f(root) 根据该树获取最大价值

状态转移方程：
f(root) = 
    f(root.left) + f(root.right)

    root.val + f(root.left.left) + f(root.left.right) + 
    f(root.right.left) + f(root.right.right) 

*/

var rob = function(root) {
    function tryRob(root) {
        if (!root) {
            return 0;
        }

        if (root.hasOwnProperty('max')) {
            return root.max;
        }
        
        let robRoot = root.val;
        if (root.left) {
            robRoot += tryRob(root.left.left) + tryRob(root.left.right);
        }
        if (root.right) {
            robRoot += tryRob(root.right.left) + tryRob(root.right.right)
        }

        return root.max = Math.max(
            tryRob(root.left) + tryRob(root.right),
            robRoot
        );
    }

    return tryRob(root);
};