// creating the graph
const graph = new Map();
graph.set("start", new Map());
graph.get("start").set("a", 6);
graph.get("start").set("b", 2);
graph.set("a", new Map());
graph.get("a").set("fin", 1);
graph.set("b", new Map());
graph.get("b").set("a", 3);
graph.get("b").set("fin", 5);
graph.set("fin", new Map());

// cost of each node
const costs = new Map();
costs.set("a", 6);
costs.set("b", 2);
costs.set("fin", Number.POSITIVE_INFINITY);

// parent of each node
const parents = new Map();
parents.set("a", "start");
parents.set("b", "start");
parents.set("fin", null);

// keep track of processed nodes
const processed = [];

function findLowestCostNode(costs) {
  lowestCost = Number.POSITIVE_INFINITY;
  lowestCostNode = null;
  costs.forEach((cost, node) => {
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  });
  return lowestCostNode;
}

let node = findLowestCostNode(costs);
while (node) {
  const nodeCost = costs.get(node);
  const neighbours = graph.get(node);
  neighbours.forEach((cost, neighbour) => {
    newNodeCost = nodeCost + cost;
    if (costs.get(neighbour) > newNodeCost) {
      costs.set(neighbour, newNodeCost);
      parents.set(neighbour, node);
    }
  });
  processed.push(node);
  node = findLowestCostNode(costs);
}

console.log(costs.get("fin"));
console.log(parents);