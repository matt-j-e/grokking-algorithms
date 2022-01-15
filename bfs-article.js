const graph = new Map();
graph.set("you", [
  {name: "peter", job: "bricklayer"},
  {name: "dimitrios", job: "chef"},
  {name: "katie", job: "architect"}
]);
graph.set("peter", [
  {name: "dean", job: "solicitor"},
  {name: "aleksandra", job: "doctor"},
]);
graph.set("dimitrios", [
  {name: "sam", job: "heating engineer"},
  {name: "shefali", job: "driving instructor"}
]);
graph.set("katie", [
  {name: "shefali", job: "driving instructor"}
]);
graph.set("dean", [
  {name: "james", job: "graphic designer"},
]);
graph.set("aleksandra", []);
graph.set("sam", [
  {name: "molly", job: "software engineerr"},
]);
graph.set("shefali", [
  {name: "andrew", job: "heating engineer"},
  {name: "amy", job: "barrister"},
]);
graph.set("james", []);
graph.set("molly", []);
graph.set("andrew", []);
graph.set("amy", []);

// function isHeatingEngineer(person) {
//   return person.job === "heating engineer";
// }

function search(name, job) {
  let searchQueue = graph.get(name);
  const searched = [];
  while (searchQueue.length > 0) {
    const person = searchQueue.shift();
    if (!searched.includes(person)) {
      if (person.job === job) {
        console.log(`${person.name} is a ${job}`);
        return true;
      } else {
        searchQueue = searchQueue.concat(graph.get(person.name));
        searched.push(person);
      }
    }
  }
  console.log(`Nobody in your social network is a ${job}`);
  return false;
}

search("you", "heating engineer"); // "sam is a heating engineer"
search("you", "police officer"); // "Nobody in your social network is a police officer"
