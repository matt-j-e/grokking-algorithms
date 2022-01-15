function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  arr.forEach((el, index) => {
    if (el < smallest) {
      smallest = el;
      smallestIndex = index;
    }
  });
  return smallestIndex;
}

function selectionSort(arr) {
  newArr = [];
  while (arr.length > 0) {
    const smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
  }
  return newArr;
}

console.log(selectionSort([5,3,6,2,10])); // [ 2, 3, 5, 6, 10 ]
console.log(selectionSort(['grape', 'apple', 'banana', 'kiwi'])); //  'apple', 'banana', 'grape', 'kiwi' ]