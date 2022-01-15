function max(arr, maxVal=Number.NEGATIVE_INFINITY) {
  if (!arr.length) return maxVal;
  if (arr[0] > maxVal) maxVal = arr[0];
  return max(arr.slice(1), maxVal);
}

console.log(max([1,3,123,4,12])); // 123
console.log(max([-1,-3,-123,-4,-12])); // -1