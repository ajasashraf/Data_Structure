// Define the graph as an adjacency list
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F', 'G'],
    D: ['B'],
    E: ['B'],
    F: ['C'],
    E: ['C']
  };
  
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
  
  // Performing DFS and BFS on the graph
  console.log('DFS:');
  dfs(graph, 'A');
  console.log('---');
  console.log('BFS:');
  bfs(graph, 'A');
  