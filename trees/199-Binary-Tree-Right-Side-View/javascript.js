// https://leetcode.com/problems/binary-tree-right-side-view/
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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];
    const queue = [root];
    const res = [];
    while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i += 1) {
            const curr = queue.pop();
            if (i === len - 1) res.push(curr.val);
            if (curr.left) queue.unshift(curr.left);
            if (curr.right) queue.unshift(curr.right);
        }
    }
    return res;
};
