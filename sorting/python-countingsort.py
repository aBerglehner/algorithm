import random
start = 0
end = 100
size = 20
randomArr = [int(random.uniform(start,end)) for _ in range(size)]


def countingSort(arr):
    if len(arr) <= 1: return arr
    size = len(arr)
    outputArr = [None for _ in range(size)]
    maxValue = max(arr)
    countArr = [0 for _ in range(maxValue + 1)]
    for num in arr:
        countArr[num] += 1
    for i in range(1,len(countArr)):
        countArr[i] += countArr[i - 1]
    for i in range(len(arr) - 1, -1, -1):
        outputArr[countArr[arr[i]] - 1] = arr[i]
        countArr[arr[i]] -= 1
    return outputArr

print('before sort:')
print(randomArr)
print('---------------------------')
print('---------------------------')
print('after sort:')
print(countingSort(randomArr))