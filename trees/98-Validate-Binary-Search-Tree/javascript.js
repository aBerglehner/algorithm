// https://leetcode.com/problems/validate-binary-search-tree/description/
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    const checker = [];
    const inOrder = (node) => {
        if (!node) return;
        inOrder(node.left);
        checker.push(node.val);
        inOrder(node.right);
    };
    inOrder(root);

    for (let i = 1; i < checker.length; i += 1) {
        if (checker[i - 1] >= checker[i]) return false;
    }
    return true;
};
