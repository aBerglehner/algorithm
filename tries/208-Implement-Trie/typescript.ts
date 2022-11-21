// https://leetcode.com/problems/implement-trie-prefix-tree/
class Node {
    children: { [key: string]: Node };
    isEnd: boolean;

    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    private root: Node;

    constructor() {
        this.root = new Node();
    }

    insert(word: string): void {
        let node: Node = this.root;

        for (const char of word) {
            if (!(char in node.children)) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    iterate(word: string): Node | null {
        let node: Node = this.root;

        for (const char of word) {
            if (!(char in node.children)) {
                return null;
            }
            node = node.children[char];
        }
        return node;
    }

    search(word: string): boolean {
        let node: Node = this.iterate(word);
        return Boolean(node && node.isEnd);
    }

    startsWith(prefix: string): boolean {
        let node: Node = this.iterate(prefix);
        return Boolean(node);
    }
}
