const statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = new Map();
stations.set("kone", new Set(["id", "nv", "ut"]));
stations.set("ktwo", new Set(["wa", "id", "mt"]));
stations.set("kthree", new Set(["or", "nv", "ca"]));
stations.set("kfour", new Set(["nv", "ut"]));
stations.set("kfive", new Set(["ca", "az"]));

const finalStations = new Set();

while (statesNeeded.size) {
  bestStation = null;
  statesCovered = new Set();

  stations.forEach((statesForStation, station) => {
    const covered = intersection(statesNeeded, statesForStation);
    if (covered.size > statesCovered.size) {
      bestStation = station;
      statesCovered = covered;
    }
  });

  for (let elem of statesCovered) {
    statesNeeded.delete(elem)
  }
  finalStations.add(bestStation);
}

console.log(finalStations);

function intersection(setA, setB) {
  let _intersection = new Set()
  for (let elem of setB) {
      if (setA.has(elem)) {
          _intersection.add(elem)
      }
  }
  return _intersection
}
