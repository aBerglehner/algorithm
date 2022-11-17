const arrayLength = 20;
const numberLength = 100;
function getRandomArr() {
    return Array.from({ length: arrayLength }, () =>
        Math.floor(Math.random() * numberLength)
    );
}
const array1 = getRandomArr();

function quicksort(array) {
    if (array.length <= 1) return array;
    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];
    for (let i = 0; i < array.length - 1; i += 1) {
        const num = array[i];
        if (num < pivot) {
            leftArr.push(num);
        } else {
            rightArr.push(num);
        }
    }
    return [...quicksort(leftArr), pivot, ...quicksort(rightArr)];
}

console.log('Array before sort:');
console.log(array1);
console.log('-----------------------------');
console.log('-----------------------------');
console.log('Array after sort:');

console.log(quicksort(array1));
