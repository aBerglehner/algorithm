import random
start = 0
end = 100
size = 20
randomArr = [int(random.uniform(start,end)) for _ in range(size)]


def quicksort(arr):
    if len(arr) <= 1: return arr
    pivot = arr[-1]
    leftArr = []
    rightArr = []
    for i in range(0,len(arr) - 1):
        num = arr[i]
        if num < pivot:
            leftArr.append(num)
        else:
            rightArr.append(num)
    return [*quicksort(leftArr),pivot,*quicksort((rightArr))]


print('before sort:')
print(randomArr)
print('---------------------------')
print('---------------------------')
print('after sort:')
print(quicksort(randomArr))