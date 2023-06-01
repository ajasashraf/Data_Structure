// Define the graph as an adjacency matrix
let graph = [];

// Function to add a new row to the adjacency matrix
function addRow() {
  const row = new Array(graph.length + 1).fill(0);
  graph.push(row);

  // Update existing rows with an additional column
  for (let i = 0; i < graph.length - 1; i++) {
    graph[i].push(0);
  }
}

// Function to insert a node into the graph using recursion
function insertNode(node, parentNode) {
  if (!graph.length) {
    // If the graph is empty, add the first row and column
    addRow();
  }

  if (graph.length <= parentNode) {
    // If the parent node is greater than or equal to the number of rows,
    // add rows and columns until it is accommodated
    while (graph.length <= parentNode) {
      addRow();
    }
  }

  // Set the connection between the parent and the new node
  graph[parentNode][node] = 1;

  // Set the connection between the new node and the parent (if the graph is undirected)
  // graph[node][parentNode] = 1;

  // Uncomment the above line if you want to add an edge from the new node to the parent as well

  // Set the connection between the new node and itself (if needed)
  // graph[node][node] = 1;

  // Add an edge from the parent to the new node (if the graph is undirected)
  // graph[parentNode][node] = 1;

  // Uncomment the above line if you want to add an edge from the parent to the new node as well
}

// Inserting nodes into the graph
insertNode(1, 0);
insertNode(2, 1);
insertNode(3, 2);

console.log(graph);
