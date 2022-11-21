// https://leetcode.com/problems/valid-parentheses/
function isValid(s: string): boolean {
    const stack: string[] = [];
    const parenthesesMatcher: { [key: string]: string } = {
        '}': '{',
        ']': '[',
        ')': '(',
    };
    for (const char of s) {
        if (char in parenthesesMatcher) {
            const last: string | undefined = stack.pop();
            if (parenthesesMatcher[char] !== last) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
