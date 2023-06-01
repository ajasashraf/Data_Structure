// Function to delete a word from the trie
function deleteWord(root, word, index = 0) {
    if (index === word.length) {
      if (!root.isWord) {
        return false; // Word not found
      }
  
      root.isWord = false; // Unmark the end of the word
  
      // If the current node has no children, it can be safely removed
      if (Object.keys(root.children).length === 0) {
        return true;
      }
  
      return false;
    }
  
    const char = word[index];
    if (!root.children[char]) {
      return false; // Word not found
    }
  
    const shouldDeleteNode = deleteWord(root.children[char], word, index + 1);
  
    if (shouldDeleteNode) {
      delete root.children[char];
      return Object.keys(root.children).length === 0 && !root.isWord;
    }
  
    return false;
  }
  
  // Function to create a new trie node
  function createTrieNode() {
    return {
      isWord: false,
      children: {},
    };
  }
  
  // Function to insert a word into the trie
  function insertWord(root, word) {
    let currentNode = root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = createTrieNode();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.isWord = true;
  }
  
  // Example usage
  const trie = createTrieNode();
  insertWord(trie, "apple");
  insertWord(trie, "banana");
  insertWord(trie, "orange");
  
  deleteWord(trie, "apple");
  
  console.log(JSON.stringify(trie, null, 2));
  