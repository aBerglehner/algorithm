// https://leetcode.com/problems/design-add-and-search-words-data-structure/
class TrieNode {
    constructor() {
        this.children = {};
        this.word = false;
    }
}

var WordDictionary = function () {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let cur = this.root;

    for (const c of word) {
        if (!(c in cur.children)) {
            cur.children[c] = new TrieNode();
        }
        cur = cur.children[c];
    }
    cur.word = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    function dfs(j, root) {
        cur = root;
        for (let i = j; i < word.length; i += 1) {
            c = word[i];
            if (c === '.') {
                for (const child of Object.values(cur.children)) {
                    if (dfs(i + 1, child)) return true;
                }
                return false;
            } else {
                if (!(c in cur.children)) {
                    return false;
                }
                cur = cur.children[c];
            }
        }
        return cur.word;
    }
    return dfs(0, this.root);
};
