import random
start = 0
end = 100
size = 20
randomArr = [int(random.uniform(start,end)) for _ in range(size)]

def merge(leftArr,rightArr):
    result = []
    leftI = 0
    rightI = 0
    while leftI < len(leftArr) and rightI < len(rightArr):
        leftNum = leftArr[leftI]
        rightNum = rightArr[rightI]
        if leftNum < rightNum:
            result.append(leftNum)
            leftI += 1
        else:
            result.append(rightNum)
            rightI += 1
    return [*result, *leftArr[leftI:], *rightArr[rightI:]]

def mergeSort(arr):
    if len(arr) <= 1: return arr    
    mid = len(arr) // 2
    leftArr = arr[:mid]
    rightArr = arr[mid:]
    return merge(mergeSort(leftArr),mergeSort((rightArr)))



print('before sort:')
print(randomArr)
print('---------------------------')
print('---------------------------')
print('after sort:')
print(mergeSort(randomArr))