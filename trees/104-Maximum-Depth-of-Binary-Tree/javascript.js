// https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
var maxDepth = function (root) {
    if (!root) return 0;
    let depth = 0;
    const queue = [root];
    while (queue.length) {
        const len = queue.length;
        depth += 1;
        for (let i = 0; i < len; i += 1) {
            const curr = queue.pop();
            if (curr.left) queue.unshift(curr.left);
            if (curr.right) queue.unshift(curr.right);
        }
    }
    return depth;
};
