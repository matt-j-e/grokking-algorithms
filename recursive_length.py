def length(arr):
  if arr == []: return 0
  return 1 + length(arr[1:])

print(length([2,4,6,7,9,23])) # 6