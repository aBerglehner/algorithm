// https://leetcode.com/problems/maximum-depth-of-binary-tree/
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

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    let result: number = 0;
    const queue: TreeNode[] = [root];

    while (queue.length) {
        const len: number = queue.length;
        result += 1;
        for (let i = 0; i < len; i += 1) {
            const curr: TreeNode = queue.pop();
            if (curr.left) queue.unshift(curr.left);
            if (curr.right) queue.unshift(curr.right);
        }
    }
    return result;
}
