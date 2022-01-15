def sum(arr):
  if arr == []: return 0
  return arr[0] + sum(arr[1:])

print(sum([2,4,6,7,9,23])) # 51
