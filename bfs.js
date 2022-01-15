// creating the graph
const graph = new Map();
graph.set("you", ["alice", "bob", "claire"]);
graph.set("bob", ["anju", "peggy"]);
graph.set("alice", ["peggy"]);
graph.set("claire", ["thom", "jonny"]);
graph.set("anju", []);
graph.set("peggy", []);
graph.set("thom", []);
graph.set("jonny", []);

function isSeller(name) {
  return name[name.length-1] === "m";
}

function search(name) {
  let searchQueue = graph.get(name);
  const searched = [];
  while (searchQueue.length > 0) {
    const person = searchQueue.shift();
    if (!searched.includes(person)) {
      if (isSeller(person)) {
        console.log(`${person} is a mango seller`);
        return true;
      } else {
        searchQueue = searchQueue.concat(graph.get(person));
        searched.push(person);
      }
    }
  }
  return false;
}

search("you");
