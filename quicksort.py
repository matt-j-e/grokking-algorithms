import random

def quicksort(arr):
  if len(arr) < 2:
    return arr
  else:
    pivot_index = random.randint(0, len(arr)-1)
    pivot = arr[pivot_index]
    reduced = arr[:pivot_index] + arr[pivot_index + 1:]
    less = [i for i in reduced if i <= pivot]
    greater = [i for i in reduced if i > pivot]
    return quicksort(less) + [pivot] + quicksort(greater)

print(quicksort([10, 5, 2, 3]))