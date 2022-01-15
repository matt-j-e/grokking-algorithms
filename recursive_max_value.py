def max(arr, max_val=0):
  if arr == []:
    return max_val
  if arr[0] > max_val:
    max_val = arr[0]
  return max(arr[1:], max_val)

print(max([1,3,123,4,12])) # 123