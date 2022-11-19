// https://leetcode.com/problems/valid-palindrome/
function isPalindrome(s: string): boolean {
    const alphaCharsLower: string[] =
        s.match(/[a-zA-Z0-9]/g)?.map((char) => char.toLowerCase()) || [];
    let left: number = 0;
    let right: number = alphaCharsLower.length - 1;
    while (left < right) {
        alphaCharsLower[left];
        alphaCharsLower[right];
        if (alphaCharsLower[left] !== alphaCharsLower[right]) return false;
        left += 1;
        right -= 1;
    }
    return true;
}
