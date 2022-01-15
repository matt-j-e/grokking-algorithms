function length(arr) {
  if (!arr.length) return 0;
  return 1 + length(arr.slice(1));
}

console.log(length([2,4,6,7,9,23])); // 6