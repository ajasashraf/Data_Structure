
// Function to add an edge to the graph
function addEdge(source, destination) {
  if (!graph[source]) {
    graph[source] = [];
  }

  graph[source].push(destination);
}

// Function to insert a node into the graph using recursion
function insertNode(node, parentNode) {
  if (!graph[parentNode]) {
    // If the parent node doesn't exist in the graph, create it
    graph[parentNode] = [];
  }

  // Add the node to the parent's adjacency list
  graph[parentNode].push(node);

  // Add an edge from the node to the parent
  addEdge(node, parentNode);
}

// Define the graph as an adjacency list
const graph = {};

// Inserting nodes into the graph
insertNode("A", "B");
insertNode("B", "C");
insertNode("C", "D");

console.log(graph);
