const items = [
  {name: "guitar", weight: 1, price: 1500},
  {name: "stereo", weight: 4, price: 3000},
  {name: "laptop", weight: 3, price: 2000},
  {name: "iPhone", weight: 1, price: 2000},
  {name: "mp3", weight: 1, price: 1000}
];

const capacity = 4 // knapsack capacity

let increment = Number.POSITIVE_INFINITY;
items.forEach(item => {
  if (item.weight < increment) {
    increment = item.weight;
  }
});

const numCols = parseInt(capacity / increment);

const knapsack = [];
items.forEach((item, row) => {
  knapsack.push([]);
  for (let col = 0; col < numCols; col++) {
    knapsack[row].push([]);
    const colMaxCapacity = (col * increment) + increment;
    if (row === 0) {
      if (item.weight <= colMaxCapacity) {
        knapsack[row][col].push(item);
      } else {
        knapsack[row][col].push({name: None, price: 0});
      }
    } else {
      const prevMax = knapsack[row-1][col];
      const prevMaxValue = prevMax.reduce((acc, pmItem) => {
        return acc + pmItem.price;
      }, 0);
      if (item.weight <= colMaxCapacity) {
        const addnlCapacity = colMaxCapacity - item.weight;
        if (addnlCapacity > 0) {
          const addnlCapacityValue = knapsack[row - 1][parseInt(addnlCapacity / increment) - 1]
            .reduce((acc, acItem) => {
            return acc + acItem.price;
          }, 0);
          if ((addnlCapacityValue + item.price) > prevMaxValue) {
            knapsack[row][col].push(item);
            knapsack[row - 1][parseInt(addnlCapacity / increment) - 1]
              .forEach(addnlItem => knapsack[row][col].push(addnlItem));
          } else {
            knapsack[row][col] = prevMax;
          }
        } else {
          if (item.price > prevMaxValue) {
            knapsack[row][col].push(item);
          } else {
            knapsack[row][col] = prevMax;
          }
        }
      } else {
        knapsack[row][col] = prevMax;
      }
    }
  }
});

console.log("\nOPTIMAL COMBINATION\n-------------------");
const optimalCombination = knapsack[knapsack.length - 1][numCols - 1];
let totalValue = 0;
optimalCombination.forEach(item => {
  totalValue += item.price;
  console.log(item.name, "\t", item.price)
});
console.log("Total\t", totalValue);
