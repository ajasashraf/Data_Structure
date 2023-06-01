// Define the graph as an adjacency list
const graph = {};

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

// Function for Depth-First Search (DFS)
function dfs(graph, start, visited = {}) {
  if (!graph[start]) {
    // If the start node doesn't exist in the graph, return
    return;
  }

  visited[start] = true;
  console.log(start);

  for (let neighbor of graph[start]) {
    if (!visited[neighbor]) {
      dfs(graph, neighbor, visited);
    }
  }
}

// Function for Breadth-First Search (BFS)
function bfs(graph, start) {
  if (!graph[start]) {
    // If the start node doesn't exist in the graph, return
    return;
  }

  const visited = {};
  const queue = [start];

  visited[start] = true;

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    for (let neighbor of graph[current]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
}

// Inserting nodes into the graph
insertNode("A", "B");
insertNode("B", "C");
insertNode("C", "D");

// Performing DFS and BFS on the graph
console.log('DFS:');
dfs(graph, 'A');
console.log('---');
console.log('BFS:');
bfs(graph, 'A');
