// Define the graph as an adjacency matrix
let graph = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0]
  ];
  
  // Function to remove a row and column from the adjacency matrix
  function removeNode(node) {
    if (graph.length === 0) {
      // If the graph is empty, nothing to remove
      return;
    }
  
    if (node >= graph.length) {
      // If the node index is out of range, nothing to remove
      return;
    }
  
    // Remove the node's row
    graph.splice(node, 1);
  
    // Remove the node's column
    for (let i = 0; i < graph.length; i++) {
      graph[i].splice(node, 1);
    }
  }
  
  // Deleting a node from the graph
  removeNode(1);
  
  console.log(graph);
  