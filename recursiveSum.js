function sum(arr) {
  if (!arr.length) return 0;
  return arr[0] + sum(arr.slice(1));
}

console.log(sum([2,4,6,7,9,23])); // 51