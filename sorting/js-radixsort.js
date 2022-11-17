const arrayLength = 20;
const numberLength = 100;
function getRandomArr() {
    return Array.from({ length: arrayLength }, () =>
        Math.floor(Math.random() * numberLength)
    );
}
const array1 = getRandomArr();

function radixSort(array) {
    if (array.length <= 1) return array;
    let maxValue = array[0];
    for (const num of array) {
        maxValue = Math.max(maxValue, num);
    }
    const iterationCount = maxValue.toString().length;
    let result = [...array];
    for (let digit = 0; digit < iterationCount; digit += 1) {
        const bucketArray = Array.from({ length: 10 }, () => []);
        for (const num of result) {
            const digitValue = Math.floor(num / Math.pow(10, digit)) % 10;
            bucketArray[digitValue].push(num);
        }
        result = [].concat(...bucketArray);
    }
    return result;
}

console.log('Array before sort:');
console.log(array1);
console.log('-----------------------------');
console.log('-----------------------------');
console.log('Array after sort:');

console.log(radixSort(array1));
