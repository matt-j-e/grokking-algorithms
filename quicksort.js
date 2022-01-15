function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];
    const reduced = [...arr.slice(0, pivotIndex), ...arr.slice(pivotIndex+1)];
    const less = reduced.filter(v => v <= pivot);
    const greater = reduced.filter(v => v > pivot);
    return [...quicksort(less), pivot, ...quicksort(greater)];
  }
}

console.log(quicksort([10, 5, 2, 3])); // [ 2, 3, 5, 10 ]
