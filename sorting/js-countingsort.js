const arrayLength = 20;
const numberLength = 100;
function getRandomArr() {
    return Array.from({ length: arrayLength }, () =>
        Math.floor(Math.random() * numberLength)
    );
}
const array1 = getRandomArr();

function countingSort(array) {
    if (array.length <= 1) return array;
    const size = array.length;
    const outputArr = new Array(size);
    let maxValue = array[0];
    for (const num of array) {
        if (num > maxValue) maxValue = num;
    }
    const countArr = new Array(maxValue + 1).fill(0);
    for (const num of array) {
        countArr[num] += 1;
    }
    for (let i = 1; i < countArr.length; i += 1) {
        countArr[i] += countArr[i - 1];
    }
    for (let i = array.length - 1; i >= 0; i -= 1) {
        outputArr[countArr[array[i]] - 1] = array[i];
        countArr[array[i]] -= 1;
    }
    return outputArr;
}

console.log('Array before sort:');
console.log(array1);
console.log('-----------------------------');
console.log('-----------------------------');
console.log('Array after sort:');

console.log(countingSort(array1));
