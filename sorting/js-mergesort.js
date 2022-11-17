const arrayLength = 20;
const numberLength = 100;
function getRandomArr() {
    return Array.from({ length: arrayLength }, () =>
        Math.floor(Math.random() * numberLength)
    );
}
const array1 = getRandomArr();

function merge(leftArr, rightArr) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];
        if (leftEl < rightEl) {
            result.push(leftEl);
            leftIndex += 1;
        } else {
            result.push(rightEl);
            rightIndex += 1;
        }
    }
    return [...result, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

function mergeSort(array) {
    if (array.length <= 1) return array;
    const middle = Math.floor(array.length / 2);
    const leftArr = array.slice(0, middle);
    const rightArr = array.slice(middle);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log('Array before sort:');
console.log(array1);
console.log('-----------------------------');
console.log('-----------------------------');
console.log('Array after sort:');

console.log(mergeSort(array1));
