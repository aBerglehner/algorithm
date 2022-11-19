// https://leetcode.com/problems/valid-palindrome-ii/
function validPalindrome(s: string): boolean {
    function isPalindrom(str: string): boolean {
        let left: number = 0;
        let right: number = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left += 1;
            right -= 1;
        }
        return true;
    }
    let noSkips: boolean = true;
    let left: number = 0;
    let right: number = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            if (noSkips) {
                noSkips = false;
                const leftShiftStr: string = s.slice(left + 1, right + 1);
                const rightShiftStr: string = s.slice(left, right);
                return isPalindrom(leftShiftStr) || isPalindrom(rightShiftStr);
            } else {
                return false;
            }
        }
        left += 1;
        right -= 1;
    }
    return true;
}
