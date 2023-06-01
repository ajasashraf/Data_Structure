// Define the graph as an adjacency list
let graph = {
    A: ['B', 'C'],
    B: ['A', 'C'],
    C: ['B']
  };
  
  // Function to remove a node from the adjacency list
  function removeNode(node) {
    if (!graph[node]) {
      // If the node doesn't exist in the graph, nothing to remove
      return;
    }
  
    // Remove the node from its adjacent nodes' lists
    for (let adjacentNode of graph[node]) {
      removeEdge(adjacentNode, node);
    }
  
    // Remove the node from the graph
    delete graph[node];
  }
  
  // Function to remove an edge between two nodes
  function removeEdge(source, destination) {
    if (!graph[source]) {
      // If the source node doesn't exist in the graph, nothing to remove
      return;
    }
  
    const index = graph[source].indexOf(destination);
    if (index > -1) {
      // Remove the edge from the source node's adjacency list
      graph[source].splice(index, 1);
    }
  }
  
  // Deleting a node from the graph
  removeNode('B');
  
  console.log(graph);
  