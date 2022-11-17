import random
start = 0
end = 100
size = 20
randomArr = [int(random.uniform(start,end)) for _ in range(size)]


from itertools import chain
def radixSort(arr):
    if len(arr) <= 1: return arr
    maxNum = max(arr)
    iterationCount = len(str(maxNum))
    for digit in range(iterationCount):
        bucketArr = [[] for _ in range(10)]
        for num in arr:
            digitValue = (num // 10 ** digit) % 10
            bucketArr[digitValue].append(num)
        arr = list(chain(*bucketArr))
    return arr

print('before sort:')
print(randomArr)
print('---------------------------')
print('---------------------------')
print('after sort:')
print(radixSort(randomArr))