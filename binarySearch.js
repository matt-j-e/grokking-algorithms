function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    if (guess === target) {
      return mid;
    }
    if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1
    }
  }

  return null;
}

const myList = [1,3,5,7,9,11,13,15];
console.log(binarySearch(myList, 5)); // 2
console.log(binarySearch(myList, 12)); // null
