// https://leetcode.com/problems/binary-tree-level-order-traversal/
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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    while (queue.length) {
        const len: number = queue.length;
        const row: number[] = [];
        for (let i = 0; i < len; i += 1) {
            const curr: TreeNode = queue.shift();
            row.push(curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        result.push(row);
    }
    return result;
}
