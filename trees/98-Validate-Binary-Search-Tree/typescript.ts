// https://leetcode.com/problems/validate-binary-search-tree/description/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
    function inOrder(node: TreeNode | null): undefined {
        if (!node) return;
        inOrder(node.left);
        result.push(node.val);
        inOrder(node.right);
    }
    const result: number[] = [];
    inOrder(root);
    for (let i = 1; i < result.length; i += 1) {
        if (result[i] <= result[i - 1]) return false;
    }
    return true;
}
